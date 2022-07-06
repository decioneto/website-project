import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"

export function Depositions() {
  return (
    <section className={styles.container}>
      <h2 className={utils.h2}>Conheça quem já trabalhou comigo</h2>

      <div className={styles["deposition-grid"]}>
        <div className={styles["deposition-card"]}>
          <div className={styles["deposition-text"]}>
            <img
              src="/images/quote.png"
              alt="Imagem representando a abertura de aspas do depoimento"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              nemo optio laborum officiis distinctio assumenda ullam, dolore
              quam voluptatibus. Illum repudiandae deserunt obcaecati
              exercitationem nulla aliquid fuga sapiente neque mollitia quod,
              assumenda temporibus sunt placeat in recusandae, molestiae
              officiis praesentium.&quot;
            </p>
          </div>

          <div className={styles["deposition-author"]}>
            <div className={styles["author-pic"]}></div>
            <div className={styles["author-info"]}>
              <h4 className={utils.h4}>Lorem Ipsum</h4>
              <p>CEO Microsoft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
