import Head from "next/head"
import utils from '../styles/utils.module.scss'

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
        <h1>Produtos</h1>
      </div>
    </>
  )
}
