import Head from 'next/head'
import styles from './styles/index.module.scss'
import utils from '../styles/utils.module.scss'

export default function Home() {
  return (
    <div className={`${utils['padding-top-page']} ${utils['side-paddings']}`}>
      <Head>  
        <title>Website</title>
      </Head>

      <div className={styles.container}>
        <h1 className={utils.h1}>
          Iae!
          <p className={utils.h2}>
            Me chamo Décio, sou <mark>Designer de Interfaces</mark> e <mark>Desenvolvedor Front-end</mark>
          </p>
        </h1>
        <p>Eu crio e desenvolvo sites, aplicativos e sistemas para agências, empresas e todos buscam elevar a comunicação de sua empresa.</p>
      
        <button className={utils['primary-button']}>Conheça meus trabalhos</button>
      </div>

      <div className={`${styles.graphElement} ${styles.graph1}`} />
      <div className={`${styles.graphElement} ${styles.graph2}`} />
    </div>
  )
}
