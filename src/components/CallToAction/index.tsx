import Link from "next/link"

import utils from "../../styles/utils.module.scss"
import styles from "./styles.module.scss"

export function CallToAction() {
  return (
    <section className={styles["cta-container"]}>
      <h2 className={utils.h2}>Quer começar um projeto?</h2>
      <p>Interessado em trabalharmos juntos? Vamos conversar.</p>
      <Link href="#">
        <a className={`${utils.button} ${utils["primary-button"]}`}>
          Vamos nessa!
        </a>
      </Link>
    </section>
  )
}
