import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import sendgridTransport from "nodemailer-sendgrid-transport"

const emailAdress = process.env.MAILADRESS

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, company, type, email, message } = req.body

    const contactMessage = {
      from: emailAdress,
      to: emailAdress,
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p><br />
        <p><strong>Email:</strong> ${email}</p><br />
        <p><strong>Company:</strong> ${company}</p><br />
        <p><strong>Tipo do projeto:</strong> ${type}</p><br />
        <p><strong>Mensagem:</strong> ${message}</p><br />
      `,
      replyTo: email,
    }

    transporter.sendMail(contactMessage)

    return res.send("")
  } catch (err) {
    console.log(err)
    return res.json({
      error: true,
      message: err.message,
    })
  }
}
