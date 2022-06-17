import Head from "next/head"
import Image from "next/image"
import { Filter } from 'react-feather'
import styles from "./styles/index.module.scss"
import utils from "../styles/utils.module.scss"
import Link from "next/link"
import { ProjectContainer } from "../components/ProjectContainer"

export default function Home() {
  return (
    <div className={`${utils["padding-top-page"]} ${utils["side-paddings"]}`}>
      <Head>
        <title>Website</title>
      </Head>

      <div className={styles.container}>
        <h1 className={utils.h1}>
          Iae!
          <p className={utils.h2}>
            Me chamo Décio, sou <mark>Designer de Interfaces</mark> e{" "}
            <mark>Desenvolvedor Front-end</mark>
          </p>
        </h1>
        <p className={styles.subtitle}>
          Eu crio e desenvolvo sites, aplicativos e sistemas para agências,
          empresas e todos buscam elevar a comunicação de sua empresa.
        </p>

        <a href="#" className={`${utils["primary-button"]} ${utils.button}`}>
          Conheça meus trabalhos
        </a>
      </div>

      <div className={`${styles.graphElement} ${styles.graph1}`} />
      <div className={`${styles.graphElement} ${styles.graph2}`} />

      <section id="aboutme" className={styles.aboutme}>
        <Image
          src="/images/profile.png"
          alt="Minha foto de apresentação"
          width={240}
          height={240}
        />

        <h2 className={utils.h2}>Muito prazer!</h2>

        <p>
          Com mais de 10 anos como freelancer, tive grandes experiências e
          aprendizados trabalhando para agências e empresas que buscavam
          melhorias e facilidades para seu negócio, colaborando com
          profissionais talentosos para crias soluções digitais para suas
          empresas e usuários. Sou naturamente curioso e busco melhorar meu
          trabalho a cada projeto que inicio, trabalhando sempre com
          responsabilidade e confidencialidade.
        </p>
      </section>

      <div className={styles["card__container"]}>
        <div className={styles.card}>
          <Image src="/images/icon-design.png" width={80} height={80}></Image>
          <h3 className={utils.h3}>Design de interfaces</h3>
          <p>
            Crio padrões de desings minimalistas, organizados, com
            interatividade, de clara e simples comunicação, solucionando
            problemas através de ideias criativas e buscando inovações sempre
            que possível.
          </p>

          <div className={styles.separator}></div>

          <h4 className={utils.h4}>Desenvolvo interfaces para:</h4>
          <p>
            Sites, aplicativos, softwares, sistemas internos e externos,
            e-commerces
          </p>

          <div className={styles.separator}></div>

          <h4 className={utils.h4}>Ferramentas para design:</h4>
          <p>
            Figma, Adobe XD, Marvel, Invision, Photoshop, Illustrator, After
            Effects
          </p>
        </div>

        <div className={styles.card}>
          <Image src="/images/icon-design.png" width={80} height={80}></Image>
          <h3 className={utils.h3}>Programação Web e App</h3>
          <p>
            Desenvolvo aplicações do zero, com soluções criativas e dando a vida
            os projetos que trabalho, com organização e escalabilidade.
            <br />
            <br />
          </p>

          <div className={styles.separator}></div>

          <h4 className={utils.h4}>Linguagens que trabalho:</h4>
          <p>HTML, CSS, JavaScript, PHP, SQL</p>

          <div className={styles.separator}></div>

          <h4 className={utils.h4}>Ferramentas para desenvolvimento:</h4>
          <p>
            React, Next, Typescript, Redux, Node, Wordpress, SASS, Styled
            Components, Bootstrap, Git, TailWind CSS, Material UI, Radix, Unit.{" "}
          </p>
        </div>
      </div>

      <ProjectContainer />
    </div>
  )
}
