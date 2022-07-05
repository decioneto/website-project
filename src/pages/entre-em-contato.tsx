import Head from "next/head"

import styles from "./styles/contact.module.scss"
import utils from "../styles/utils.module.scss"
import { Send } from "react-feather"

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Sobre mim</title>
      </Head>

      <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
        <div className={styles.header}>
          <h2 className={utils.h2}>
            Pronto para começar?
            <br /> Vamos conversar sobre seu projeto!
          </h2>
        </div>

        <div className={styles["form-body"]}>
          <form>
            <div className={utils["form-row"]}>
              <div className={utils["form-group"]}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className={utils["form-input"]}
                  required
                />
              </div>
              <div className={utils["form-group"]}>
                <label htmlFor="company">Empresa</label>
                <input
                  type="text"
                  id="company"
                  className={utils["form-input"]}
                />
              </div>
            </div>
            <div className={utils["form-row"]}>
              <div className={utils["form-group"]}>
                <label htmlFor="type">Tipo de projeto</label>
                <select id="type" className={utils["form-input"]} required>
                  <option value="">Selecione</option>
                  <option value="">Design de interface</option>
                  <option value="">Desenvolvimento</option>
                </select>
              </div>
              <div className={utils["form-group"]}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={utils["form-input"]}
                  required
                />
              </div>
            </div>
            <div className={utils["form-group"]}>
              <label htmlFor="email">Descreva o projeto</label>
              <textarea
                id=""
                cols={30}
                rows={3}
                className={utils["form-textarea"]}
                required
              />
            </div>

            <button
              type="submit"
              className={`
                ${utils.button}
                ${utils["button-icon"]}
                ${utils["primary-button"]}
              `}
            >
              <Send size={16} />
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
