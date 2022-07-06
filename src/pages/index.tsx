import Head from "next/head"
import { ProjectContainer } from "../components/ProjectContainer"
import { PersonalProjects } from "../components/PersonalProjects"
import { AboutMe } from "../components/AboutMe"
import styles from "./styles/index.module.scss"
import utils from "../styles/utils.module.scss"
import { CallToAction } from "../components/CallToAction"
import { GetStaticProps } from "next"
import { client } from "../lib/apollo"
import { gql } from "@apollo/client"
import Link from "next/link"

export interface GetProjectsQuery {
  projects: {
    id: string
    projectType: "develop" | "interface"
    title: string
    slug: string
    coverImage: {
      id: string
      url: string
    }
  }[]
}

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

export default function Home({
  projects,
  personalProjects,
}: GetProjectsQuery & GetPersonalProjectsQuery) {
  return (
    <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
      <Head>
        <title>Décio Neto - Crio sites e interfaces para sua empresa</title>
      </Head>

      <div className={styles.container}>
        <h1 className={utils.h1}>
          Iae!
          <p className={utils.h2}>
            Me chamo Décio, sou <mark>Designer de Interfaces</mark> e{" "}
            <mark>Desenvolvedor Front-end</mark>
          </p>
        </h1>
        <p className={styles.subtitle}>
          Eu crio e desenvolvo sites, aplicativos e sistemas para agências,
          empresas e todos buscam elevar a comunicação de sua empresa.
        </p>

        <Link href="projetos">
          <a className={`${utils["primary-button"]} ${utils.button}`}>
            Conheça meus trabalhos
          </a>
        </Link>
      </div>

      <div className={`${styles.graphElement} ${styles.graph1}`} />
      <div className={`${styles.graphElement} ${styles.graph2}`} />

      <AboutMe />

      <ProjectContainer projects={projects} />

      <PersonalProjects personalProjects={personalProjects} />

      <CallToAction />

      {/* <Depositions /> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects(first: 3) {
          id
          projectType
          title
          slug
          coverImage {
            id
            url
          }
        }
        personalProjects {
          id
          title
          link
          description
          inProgress
          projectLogo {
            url
          }
        }
      }
    `,
  })

  const { projects, personalProjects } = data

  return {
    props: {
      projects,
      personalProjects,
    },
    revalidate: 60 * 60 * 24,
  }
}
