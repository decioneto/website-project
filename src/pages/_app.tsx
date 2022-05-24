import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp
