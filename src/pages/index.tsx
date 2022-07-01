import Head from "next/head"
import { ProjectContainer } from "../components/ProjectContainer"
import { PersonalProjects } from "../components/PersonalProjects"
import { AboutMe } from "../components/AboutMe"
import styles from "./styles/index.module.scss"
import utils from "../styles/utils.module.scss"
import { CallToAction } from "../components/CallToAction"
import { Depositions } from "../components/Depositions"
import { GetStaticProps } from "next"
import { client } from "../lib/apollo"
import { gql } from "@apollo/client"

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

export default function Home({projects}: GetProjectsQuery) {
  return (
    <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
      <Head>
        <title>Website</title>
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

        <a
          href="#jobs"
          className={`${utils["primary-button"]} ${utils.button}`}
        >
          Conheça meus trabalhos
        </a>
      </div>

      <div className={`${styles.graphElement} ${styles.graph1}`} />
      <div className={`${styles.graphElement} ${styles.graph2}`} />

      <AboutMe />

      <ProjectContainer projects={projects} />

      <PersonalProjects />

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
      }
  `,
  })

  const {projects} = data

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24 
  }
}
