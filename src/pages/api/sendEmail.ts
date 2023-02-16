import { NextApiRequest, NextApiResponse } from "next"
import { EmailData, EmailTransporter } from "../../emailTransporter/smtp"

interface SendEmailReponse extends NextApiRequest {
  body: EmailData
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: SendEmailReponse, res: NextApiResponse) => {
  try {
    const emailTransporter = new EmailTransporter()
    const { company, email, message, name, type } = req.body

    await emailTransporter.execute({
      company,
      email,
      message,
      name,
      type,
    })

    return res.status(200).json({ status: "success" })
  } catch (error) {
    return res.status(400).json({
      message: error,
      status: "fail",
    })
  }
}
