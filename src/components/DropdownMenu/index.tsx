import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu } from 'react-feather'
import { useEffect, useState } from 'react'

export function DropdownMenu() {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles['dropdown--menu']}>
      <button 
        className={styles['dropdown--trigger']}
        data-close={isOpen}
        onClick={toggleMenu}
        >
        <Menu />
      </button>
      <div className={`${styles['dropdown--container']} ${isOpen ? [styles.collapsed] : ""}`}>
        <div className={styles['dropdown--item']}>
          <Link href="/">
            <a
              className={`${pathname === '/' ? [styles.active] : ""}`}
            >Home</a>
          </Link>
        </div>
        <div className={styles['dropdown--item']}>
          <Link href="/about">
            <a
              className={`${pathname === '/about' ? [styles.active] : ""}`}
            >Sobre mim</a>
          </Link>
        </div>
        <div className={styles['dropdown--item']}>
          <Link href="/projects">
            <a
              className={`${pathname === '/projects' ? [styles.active] : ""}`}
            >Projetos</a>
          </Link>
        </div>
        <div className={styles['dropdown--item']}>
          <button>Começe um projeto</button>
        </div>
      </div>
    </div>
  )
}