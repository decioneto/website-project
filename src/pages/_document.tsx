import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta
            name="description"
            content="Eu crio e desenvolvo sites, aplicativos e sistemas web para agências e empresas ou todos que buscam elevar suas ideias para novos patamares. Está querendo começar algum projeto? Entre em contato e vamos começar!"
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

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-CEYXRR5X6G"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
              `,
            }}
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
