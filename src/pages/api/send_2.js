import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY_JOSH);

export default async (req, res) => {

    const { email, message, full_name, phone } = req.body

  try {
    await sendgrid.send({
      to: 'josh@studioprisoner.com',
      from: 'josh@studioprisoner.com',
      subject: `Kalani Contact form - from ${full_name}`,
      html: `<p>Name: ${full_name}</p><p>Email: ${email}</p><p>Phone number: ${phone}</p><p>${message}</p>`
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: '' });
};
