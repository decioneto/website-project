import { PersonalProjectsCard } from "../PersonalProjectsCard"

import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"

interface GetPersonalProjectsQuery {
  personalProjects: {
    id: string
    title: string
    link: string
    description: string
    inProgress: boolean
    projectLogo: {
      url: string
    }
  }[]
}

export function PersonalProjects({
  personalProjects,
}: GetPersonalProjectsQuery) {
  return (
    <section className={`${styles["personal-projects"]}`}>
      <div className={styles["personal-bg"]}></div>

      <div className={styles["personal-projects-header"]}>
        <h2 className={utils.h2}>Projetos Pessoais</h2>
      </div>

      <div className={styles["project-grid"]}>
        {personalProjects.map((personalProject) => (
          <PersonalProjectsCard
            key={personalProject.id}
            title={personalProject.title}
            projectLogo={personalProject.projectLogo}
            description={personalProject.description}
            inProgress={personalProject.inProgress}
            link={personalProject.link}
          />
        ))}
      </div>
    </section>
  )
}
