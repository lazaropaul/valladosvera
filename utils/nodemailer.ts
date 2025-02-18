import nodemailer from "nodemailer";

export const sendMail = async ( options: Array<any> ) => {
  //Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }

  });

  //Define email options
  const mailOptions = {
    from: 'Pol Lázaro <info@valladosvera.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  await transporter.sendMail( mailoptions )
}