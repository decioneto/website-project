import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"
import Image from "next/image"
import { Tool } from "react-feather"

export function PersonalProjects() {
  return (
    <section className={`${styles["personal-projects"]}`}>
      <div className={styles["personal-bg"]}></div>

      <div className={styles["personal-projects-header"]}>
        <h2 className={utils.h2}>Projetos Pessoais</h2>
      </div>

      <div className={styles["project-grid"]}>
        <div className={styles["project-card"]}>
          <div className={styles["card-img"]}>
            <Image
              layout={"fill"}
              src={"/images/booked.png"}
              objectFit={"contain"}
            />
          </div>

          <p>
            Aplicativo para os amantes literários pesquisarem, salvarem e
            organizarem suas leituras.
          </p>

          <div className={styles.status}>
            <Tool size={16} /> Em desenvolvimento
          </div>

          <a href="#">Veja o projeto no GitHub</a>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["card-img"]}>
            <Image
              layout={"fill"}
              src={"/images/booked.png"}
              objectFit={"contain"}
            />
          </div>

          <p>
            Aplicativo para os amantes literários pesquisarem, salvarem e
            organizarem suas leituras.
          </p>

          <div className={styles.status}>
            <Tool size={16} /> Em desenvolvimento
          </div>

          <a href="#">Veja o projeto no GitHub</a>
        </div>
      </div>
    </section>
  )
}
