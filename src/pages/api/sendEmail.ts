import sendgrid from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const emailAdress = process.env.MAILADRESS

interface SendEmailReponse {
  name: string
  company: string
  type: string
  email: string
  message: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body: SendEmailReponse = req.body

    const data = {
      to: emailAdress,
      from: emailAdress,
      subject: `Nova mensagem de contato - ${body.name}`,
      html: `
        <p><strong>Name:</strong> ${body.name}</p><br />
        <p><strong>Email:</strong> ${body.email}</p><br />
        <p><strong>Company:</strong> ${body.company}</p><br />
        <p><strong>Tipo do projeto:</strong> ${body.type}</p><br />
        <p><strong>Mensagem:</strong> ${body.message}</p><br />
      `,
      replyTo: body.email,
    }

    await sendgrid.send(data)

    return res.status(200).json({ status: "Ok" })
  } catch (error) {
    console.log(error, "erro na rota post")
  }
}
