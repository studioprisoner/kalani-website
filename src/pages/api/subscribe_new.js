import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

    const { email } = req.body
    
    const content = {
        to: 'josh@studioprisoner.com',
        from: email,
        subject: `Kalani New Newsletter Subscriber`,
        html: `<p>Please add my email: ${email} to the subscription list</p>`
    }

    try{
        await sendgrid.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
      return res.status(200).json({ error: '' });
}