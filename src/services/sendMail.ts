import axios from "axios"

export async function sendContactMail(
  name: string,
  company: string,
  type: string,
  email: string,
  message: string
) {
  const data = {
    name,
    company,
    type,
    email,
    message,
  }

  try {
    return await axios.post("../api/contact", data)
  } catch (err) {
    console.log(err)
    return err
  }
}
