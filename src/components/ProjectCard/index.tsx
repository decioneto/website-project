import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"
import Link from "next/link"

interface ProjectCardProps {
  name: string
  type: string
  slug: string
  cover: string
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={`/projetos/${props.slug}`}>
      <div className={styles["project-card"]}>
        <div className={styles["card-infos"]}>
          <h3 className={utils.h3}>{props.name}</h3>
          <p>{props.type}</p>
          <a className={`${utils.button} ${utils["secondary-button"]}`}>
            Conheça o projeto
          </a>
        </div>
        <div
          className={styles["card-image"]}
          style={{ backgroundImage: `url(${props.cover})` }}
        />
      </div>
    </Link>
  )
}
