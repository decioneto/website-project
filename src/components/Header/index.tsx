import Image from 'next/image'
import Link from 'next/link'
import { DropdownMenu } from '../DropdownMenu'
import styles from './styles.module.scss'

export function Header() {
  
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <a>
            <Image src="/images/logo.png" height={72} width={72} alt="" />
          </a>
        </Link>
        
        <DropdownMenu />
      </div>
    </div>
  )
}