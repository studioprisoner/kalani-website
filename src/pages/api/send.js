import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

    const { email, message, full_name, phone } = req.body
    
    const content = {
        to: 'jordyn@kalni-co.com.au',
        from: 'josh@kalani-co.com.au',
        subject: `Kalani Contact form - from ${full_name}`,
        html: `<p>Name: ${full_name}</p><p>Email: ${email}</p><p>Phone number: ${phone}</p><p>${message}</p>`
    }

    try{
        await sendgrid.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
      return res.status(200).json({ error: '' });
}