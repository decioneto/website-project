import nodemailer from "nodemailer"

export interface EmailData {
  name: string
  company: string
  type: string
  email: string
  message: string
}

export class EmailTransporter {
  private transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  })

  public async execute({ company, email, message, name, type }: EmailData) {
    await this.transporter.sendMail({
      from: process.env.MAIL,
      to: process.env.MAIL,
      subject: `Nova mensagem de contato - ${name}`,
      html: `
          <p><strong>Name:</strong> ${name}</p><br />
          <p><strong>Email:</strong> ${email}</p><br />
          <p><strong>Company:</strong> ${company}</p><br />
          <p><strong>Tipo do projeto:</strong> ${type}</p><br />
          <p><strong>Mensagem:</strong> ${message}</p><br />
        `,
    })
  }
}
