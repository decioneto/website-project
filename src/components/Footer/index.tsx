import Image from "next/image"
import styles from "./styles.module.scss"

export function Footer() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/logo-white.png"
        width={72}
        height={75}
        alt="Logo do rodapé"
      />

      <p>
        “The secret to success: find something you love to do so much, you can’t
        wait for the sun to rise to do it all over again”
        <span>— Chris Gardner, The Pursuit Of Happyness</span>
      </p>

      <ul role="menu">
        <li role="menuitem">
          <a href="https://www.instagram.com/decioneeto/" target="_blank ">
            <Image
              src="/images/instagram.svg"
              width={24}
              height={24}
              alt="Ver meu perfil no Instagram"
            />
          </a>
        </li>
        <li role="menuitem">
          <a href="https://www.linkedin.com/in/decioneto/" target="_blank">
            <Image
              src="/images/linkedin.svg"
              width={24}
              height={24}
              alt="Ver meu perfil no Linkedin"
            />
          </a>
        </li>
        <li role="menuitem">
          <a href="https://dribbble.com/decioneto" target="_blank">
            <Image
              src="/images/dribbble.svg"
              width={24}
              height={24}
              alt="Ver meu perfil no Dribbble"
            />
          </a>
        </li>
        <li role="menuitem">
          <a href="https://www.behance.net/decioneto" target="_blank ">
            <Image
              src="/images/behance.svg"
              width={24}
              height={24}
              alt="Ver meu perfil no Behance"
            />
          </a>
        </li>
      </ul>

      <small>&copy;2022 Décio Neto</small>
    </div>
  )
}
