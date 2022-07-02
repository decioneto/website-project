import { ProjectCard } from "../ProjectCard"
import Link from "next/link"
import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"

interface GetProjectsQuery {
  projects: {
    id: string;
    projectType: 'develop' | 'interface';
    title: string;
    slug: string;
    coverImage: {
      id: string;
      url: string;
    }
  }[]
}

export function ProjectContainer({ projects }: GetProjectsQuery) {

  return (
    <div className={styles["project-container"]} id="jobs">
      <div className={styles["project-container-header"]}>
        <h2 className={utils.h2}>Meus trabalhos recentes</h2>
      </div>

      <div className={styles["project-grid"]}>
        {
          projects.map(project => (
            <ProjectCard
              key={project.id} 
              name={project.title}
              slug={project.slug}
              type={project.projectType}
              cover={project.coverImage.url}
            />
          ))
        }
      </div>

      <Link href="projects">
        <a className={`${utils.button} ${utils["primary-button"]}`}>
          Ver todos
        </a>
      </Link>
    </div>
  )
}
