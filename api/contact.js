import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed'
    })
  }

  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: 'Please fill in all fields.'
      })
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['nandukopparapu312@gmail.com'],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `
    })

    if (error) {
      return res.status(500).json({
        message: 'Failed to send email.',
        error
      })
    }

    return res.status(200).json({
      message: 'Email sent successfully!',
      data
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong.'
    })
  }
}