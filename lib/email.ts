// Email sending using Next.js API route
// This sends emails through your own backend

// Send email function using our API route
export const sendEmail = async (formData: {
  name: string
  email: string
  message: string
}) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return { success: true, data: result.data }
    } else {
      throw new Error(result.error || `HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Initialize function (not needed for API route)
export const initEmailJS = () => {
  // No initialization needed for API route
}
