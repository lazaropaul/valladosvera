import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(subject, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Web contact" <info@valladosvera.com>', // sender address
    to: "info@valladosvera.com", // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  return info.messageId
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
