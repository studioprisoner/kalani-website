const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY_JOSH)

  const { full_name, email, phone, message } = req.body

  const content = {
    to: 'josh@studioprisoner.com',
        from: 'josh@studioprisoner.com',
        subject: `Kalani Contact form - from ${full_name}`,
        html: `<p>Name: ${full_name}</p><p>Email: ${email}</p><p>Phone number: ${phone}</p><p>${message}</p>`
    }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
