import axios from "axios"
import { FormEvent, useState } from "react"
import { Send } from "react-feather"
import toast from "react-hot-toast"
import { sendContactMail } from "../../services/sendMail"
import utils from "../../styles/utils.module.scss"

export function Form() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [type, setType] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !type.trim() || !message.trim()) {
      toast.error(
        "Preencha todos os campos obrigatórios para enviar sua mensagem!",
        {
          style: {
            background: "#ea3942",
            color: "#fff",
          },
        }
      )

      return
    }

    try {
      setLoading(true)

      axios
        .post("/api/sendEmail", {
          name,
          company,
          type,
          email,
          message,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(
              "Obrigado por querer fazer essa parceria, iremos conversar em breve!",
              {
                style: {
                  background: "#40af4b",
                  color: "#fff",
                },
                duration: 5000,
              }
            )

            setName("")
            setCompany("")
            setEmail("")
            setType("")
            setMessage("")
          }
        })
    } catch (error) {
      toast.error(
        "Ops! Ocorreu um erro ao tentar enviar esta mensagem, tente novamente!",
        {
          style: {
            background: "#ea3942",
            color: "#fff",
          },
        }
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={utils["form-row"]}>
        <div className={utils["form-group"]}>
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            className={utils["form-input"]}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={utils["form-group"]}>
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            className={utils["form-input"]}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>
      <div className={utils["form-row"]}>
        <div className={utils["form-group"]}>
          <label htmlFor="type">Tipo de projeto*</label>
          <select
            id="type"
            className={utils["form-input"]}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="selecione">Selecione</option>
            <option value="interface">Design de interface</option>
            <option value="develop">Desenvolvimento</option>
          </select>
        </div>
        <div className={utils["form-group"]}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className={utils["form-input"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className={utils["form-group"]}>
        <label htmlFor="email">Descreva o projeto*</label>
        <textarea
          id=""
          cols={30}
          rows={3}
          className={utils["form-textarea"]}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <small>* Campos obrigatórios</small>
      </div>

      <button
        type="submit"
        className={`
          ${utils.button}
          ${utils["button-icon"]}
          ${utils["primary-button"]}
        `}
        disabled={loading}
      >
        <Send size={16} />
        Enviar
      </button>
    </form>
  )
}
