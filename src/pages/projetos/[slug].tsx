import { gql } from "@apollo/client"
import { GetStaticPaths, GetStaticProps } from "next"
import { client } from "../../lib/apollo"

import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"
import { CallToAction } from "../../components/CallToAction"
import { ChevronLeft } from "react-feather"
import Link from "next/link"

interface ProjectPageProps {
  project: {
    id: string
    title: string
    description: string
    projectType: "develop" | "interface"
    link: string
    projectImages: {
      url: string
    }[]
  }
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className={styles.container}>
      <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
        <div className={styles["project-header"]}>
          <h2 className={utils.h2}>{project.title}</h2>
          {project.projectType === "interface" ? (
            <p>Design de interface</p>
          ) : (
            <p>Desenvolvimento de Sites e Sistemas</p>
          )}
        </div>

        <div className={styles["project-body"]}>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.link}>
            <a href={project.link} target="_blank">
              Acesse o link do projeto
            </a>
          </div>

          {project.projectImages.map((image, index) => (
            <div key={index} className={styles["project-img"]}>
              <img src={image.url} alt="" />
            </div>
          ))}
        </div>

        <div className={styles["button-container"]}>
          <Link href="projetos">
            <button
              className={`${utils["tertiary-button"]} ${utils.button} ${utils["button-icon"]}`}
            >
              Voltar
              <ChevronLeft size={16} />
            </button>
          </Link>
        </div>

        <CallToAction />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          slug
        }
      }
    `,
  })

  return {
    paths: data.projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string

  const { data } = await client.query({
    query: gql`
      query Project($slug: String!) {
        project(where: { slug: $slug }) {
          id
          title
          description
          projectType
          link
          projectImages {
            url
          }
        }
      }
    `,
    variables: { slug },
  })

  const { project } = data

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24,
  }
}
