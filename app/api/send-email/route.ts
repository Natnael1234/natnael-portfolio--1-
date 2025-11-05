import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the email data
    console.log('📧 New contact form submission:')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('---')

    // Send real email if environment variables are set
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      })

      console.log('GMAIL_USER:', process.env.GMAIL_USER)
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '✅ Exists' : '❌ Missing')

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'natimeng1269@gmail.com',
        subject: `Portfolio Contact: ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sent from your portfolio contact form</em></p>
        `,
        replyTo: email,
      }

      await transporter.sendMail(mailOptions)
      console.log('✅ Email sent successfully to natimeng1269@gmail.com')
    } else {
      console.log('⚠️  Email not sent - Gmail credentials not configured')
      console.log(
        '   Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local to enable email sending'
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        data: {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
