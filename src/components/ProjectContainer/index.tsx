import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"
import Link from "next/link"

export function ProjectContainer() {
  return (
    <div className={styles["project-container"]} id="jobs">
      <div className={styles["project-container-header"]}>
        <h2 className={utils.h2}>Meus trabalhos recentes</h2>
      </div>

      <div className={styles["project-grid"]}>
        <div className={styles["project-card"]}>
          <div className={styles["card-infos"]}>
            <h3 className={utils.h3}>Blinket App</h3>
            <p>Aplicativo Mobile</p>
            <Link href={"#"}>
              <a className={`${utils.button} ${utils["secondary-button"]}`}>
                Conheça o projeto
              </a>
            </Link>
          </div>
          <div className={styles["card-image"]}></div>
        </div>
        <div className={styles["project-card"]}>
          <div className={styles["card-infos"]}>
            <h3 className={utils.h3}>Blinket App</h3>
            <p>Aplicativo Mobile</p>
            <Link href={"#"}>
              <a className={`${utils.button} ${utils["secondary-button"]}`}>
                Conheça o projeto
              </a>
            </Link>
          </div>
          <div className={styles["card-image"]}></div>
        </div>
        <div className={styles["project-card"]}>
          <div className={styles["card-infos"]}>
            <h3 className={utils.h3}>Blinket App</h3>
            <p>Aplicativo Mobile</p>
            <Link href={"#"}>
              <a className={`${utils.button} ${utils["secondary-button"]}`}>
                Conheça o projeto
              </a>
            </Link>
          </div>
          <div className={styles["card-image"]}></div>
        </div>
      </div>

      <Link href={"#"}>
        <a className={`${utils.button} ${utils["primary-button"]}`}>
          Ver todos
        </a>
      </Link>
    </div>
  )
}
