import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta
            name="description"
            content="Eu crio e desenvolvo sites, aplicativos e sistemas para agências, empresas e todos buscam elevar a comunicação de sua empresa. Está querendo começar algum projeto? Entre em contato e vamos começar!"
          />
          <meta name="robots" content="index,follow" />
          <meta name="robots" content="all" />
          <meta name="google" content="nositelinkssearchbox" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400;700&family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
