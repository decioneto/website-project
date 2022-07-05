import Head from "next/head"
import { AboutMe } from "../components/AboutMe"
import utils from "../styles/utils.module.scss"

export default function AboutMePage() {
  return (
    <>
      <Head>
        <title>Sobre mim</title>
      </Head>

      <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
        <AboutMe />
      </div>
    </>
  )
}
