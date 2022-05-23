import Head from "next/head"
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>

      <GlobalStyle />
    </>
  )
}

export default MyApp
