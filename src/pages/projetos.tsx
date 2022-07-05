import Head from "next/head"
import { GetStaticProps } from "next"
import { client } from "../lib/apollo"
import { gql } from "@apollo/client"
import { GetProjectsQuery } from "."

import styles from "./styles/projects.module.scss"
import utils from "../styles/utils.module.scss"
import { ProjectCard } from "../components/ProjectCard"

export default function AboutMe({ projects }: GetProjectsQuery) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Produtos</title>
      </Head>
      <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
        <h2 className={utils.h2}>Conheça meus projetos</h2>

        <div className={styles["projects-grid"]}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.title}
              slug={project.slug}
              type={project.projectType}
              cover={project.coverImage.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          id
          slug
          title
          description
          projectType
          coverImage {
            url
          }
        }
      }
    `,
  })

  const { projects } = data

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24,
  }
}
