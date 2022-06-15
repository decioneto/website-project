import Image from "next/image"
import Link from "next/link"
import { DropdownMenu } from "../DropdownMenu"
import styles from "./styles.module.scss"
import utils from "../../styles/utils.module.scss"

export function Header() {
  return (
    <menu className={`${styles.container} ${utils["side-paddings"]}`}>
      <div className={styles.nav}>
        <Link href="/">
          <a aria-label="Logo da empresa, voltar para home">
            <Image
              src="/images/logo.png"
              height={72}
              width={72}
              alt="Logo da empresa"
            />
          </a>
        </Link>

        <DropdownMenu />
      </div>
    </menu>
  )
}
