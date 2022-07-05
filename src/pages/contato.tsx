import Head from "next/head"

import styles from "./styles/contact.module.scss"
import utils from "../styles/utils.module.scss"
import { Send } from "react-feather"
import { Form } from "../components/Form"

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
          <Form />
        </div>
      </div>
    </>
  )
}
