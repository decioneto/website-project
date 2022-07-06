import { gql } from "@apollo/client"
import { GetServerSideProps } from "next"
import { client } from "../lib/apollo"

function generateSiteMap(projects: {slug: string}[]) {
  return `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
      <loc>https://decioneto.vercel.app/</loc>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://decioneto.vercel.app/projetos</loc>
      <priority>0.80</priority>
    </url>
    ${
      projects.map(project => {
        return `
          <url>
            <loc>https://decioneto.vercel.app/projetos/${project.slug}</loc>
            <priority>0.80</priority>
          </url>
        `
      })
    }
    <url>
      <loc>https://decioneto.vercel.app/contato</loc>
      <priority>0.80</priority>
    </url>
  </urlset>
  `
}

export default function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          slug
        }
      }
    `,
  })

  const sitemap = generateSiteMap(data.projects)

  res.setHeader("Content-Type", "text-xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
