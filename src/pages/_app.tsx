import { ApolloProvider } from "@apollo/client"
import { client } from "../lib/apollo"
import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../styles/global.scss"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Header />
        <Toaster position="top-right" />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default MyApp
