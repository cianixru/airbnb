import * as nodemailer from 'nodemailer'

export const sendEmail = async (
  recipient: string,
  url: string,
  linkText: string
) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
    },
    tls: { rejectUnauthorized: false }
  })

  const message = {
    from: 'Sender Name <sender@example.com>',
    to: `Recipient <${recipient}>`,
    subject: 'Confirm Account',
    text: 'Please click the link below to confirm your account',
    html: `
          <html>
            <body>
            <a href="${url}">${linkText}</a>
            </body>
          </html>
          `
  }

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log('Error occurred. ' + err.message)
    }

    console.log('Message sent: %s', info.messageId)
    console.log('Message: %s', message.html)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
}
