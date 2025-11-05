"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Freelance Video Editor & Digital Creative",
      organization: "Upwork",
      period: "2021 – Present",
      location: "Remote",
      description:
        "Completed 15+ successful projects with 100% job success. Specialized in VSLs, UGC Ads, and e-commerce brand content. Delivered over 799 hours of professional video editing work for international clients.",
    },
    {
      type: "work",
      title: "Social Media Manager & Sound Engineer",
      organization: "AASTU ECSF Media Team",
      period: "2021 – 2023",
      location: "Addis Ababa",
      description:
        "Managed and grew ECSF YouTube channel. Served as sound engineer and social media leader, coordinating digital outreach and designing engaging content strategies.",
    },
    {
      type: "work",
      title: "Creative Strategist",
      organization: "KOKI SPA, Calgary",
      period: "2024",
      location: "Remote",
      description:
        "Developed creative strategies and content ideas for brand storytelling and promotional campaigns on Instagram.",
    },
    {
      type: "work",
      title: "Graphic Designer",
      organization: "Compassion Ethiopia & Religious Organizations",
      period: "2024",
      location: "Addis Ababa",
      description:
        "Designed visual content, posters, and branding materials. Collaborated on creative campaigns for awareness and community engagement.",
    },
  ]

  const education = {
    degree: "B.Sc. in Electrical and Computer Engineering",
    specialization: "Computer Specialization",
    institution: "Addis Ababa Science and Technology University",
    year: "2024",
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-sm uppercase tracking-widest text-primary font-medium">
              Experience
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold">
              Professional Journey
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of creativity, strategy, and technical expertise shaped through work and academic achievements.
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div className="relative space-y-8">
            {/* vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="relative ml-12 p-6 sm:p-8 shadow-lg hover:shadow-xl transition rounded-2xl">
                  {/* Icon */}
                  <div className="absolute -left-8 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.organization} • {exp.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed pt-2">{exp.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h4>
            <Card className="p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="space-y-2">
                <h5 className="text-lg font-semibold">{education.degree}</h5>
                <p className="text-muted-foreground">{education.specialization}</p>
                <p className="text-sm text-muted-foreground">
                  {education.institution} • {education.year}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
