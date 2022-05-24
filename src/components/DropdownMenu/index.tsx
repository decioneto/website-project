import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu } from 'react-feather'
import { useEffect, useState, useRef } from 'react'

export function DropdownMenu() {
  const { pathname } = useRouter()
  const [isClosed, setIsClosed] = useState(true)
  const menuContainer = useRef(null)

  useEffect(() => {
    function handleClickOutside(e: { target: any }) {
      if(menuContainer.current && !menuContainer.current.contains(e.target)) {
        setIsClosed(true)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

  }, [menuContainer])

  function toggleMenu() {
    setIsClosed(!isClosed)
  }

  return (
    <nav className={styles['dropdown--menu']}>
      <button 
        className={styles['dropdown--trigger']}
        data-close={isClosed}
        onClick={toggleMenu}
        >
        <Menu />
      </button>
      <ul 
        className={`${styles['dropdown--container']} ${isClosed ? [styles.collapsed] : ""}`}
        role="menu"
        aria-orientation='vertical'
        ref={menuContainer}
      >
        <li className={styles['dropdown--item']} role="menuitem">
          <Link href="/">
            <a
              className={`${pathname === '/' ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
            >Home</a>
          </Link>
        </li>
        <li className={styles['dropdown--item']} role="menuitem">
          <Link href="/about">
            <a
              className={`${pathname === '/about' ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
            >Sobre mim</a>
          </Link>
        </li>
        <li className={styles['dropdown--item']} role="menuitem">
          <Link href="/projects">
            <a
              className={`${pathname === '/projects' ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
            >Projetos</a>
          </Link>
        </li>
        <li className={styles['dropdown--item']}>
          <button>Começe um projeto</button>
        </li>
      </ul>
    </nav>
  )
}