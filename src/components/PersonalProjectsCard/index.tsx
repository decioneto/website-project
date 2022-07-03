import Image from "next/image"
import { Tool } from "react-feather"
import styles from "./styles.module.scss"

interface PersonalProjectsCardProps {
  title: string
  link: string
  description: string
  inProgress: boolean
  projectLogo: {
    url: string
  }
}

export function PersonalProjectsCard(props: PersonalProjectsCardProps) {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["card-img"]}>
        <Image
          layout={"fill"}
          src={`${props.projectLogo.url}`}
          objectFit={"contain"}
        />
      </div>

      <p>{props.description}</p>

      <div className={styles.status}>
        {props.inProgress && (
          <span>
            <Tool size={16} /> Em desenvolvimento
          </span>
        )}
      </div>

      <a target="_blank" href={props.link}>
        Veja o projeto no GitHub
      </a>
    </div>
  )
}
