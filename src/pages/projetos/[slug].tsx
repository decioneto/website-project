import { gql } from "@apollo/client"
import { GetStaticPaths, GetStaticProps } from "next"
import { client } from "../../lib/apollo"

import styles from './styles.module.scss'
import utils from '../../styles/utils.module.scss'

interface ProjectPageProps {
  project: {
    id: string
    projectType: "develop" | "interface"
    title: string
    slug: string
    coverImage: {
      id: string
      url: string
    }
  }
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className={styles.container}>
      <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
        <h2 className={utils.h2}>{project.title}</h2>
        {
          project.projectType === "interface" ? (
            <p>Design de interface</p>
          ) : (
            <p>Desenvolvimento de Sites e Sistemas</p>
          )
        }

        
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await client.query({
    query: gql`
      query Projects {
        projects {
          slug
        }
      }
    `,
  })

  return {
    paths: data.projects.map(project =>({params: {slug: project.slug}})),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string

  const {data} = await client.query({
    query: gql`
      query Project($slug: String!) {
        project(where: { slug: $slug }) {
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
    variables: {slug}
  })

  const { project } = data

  return {
    props: {
      project
    },
    revalidate: 60 * 60 * 24
  }
}