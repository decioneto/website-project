import { useRouter } from "next/router"
import Link from "next/link"
import styles from "./styles.module.scss"
import { Menu } from "react-feather"
import { useEffect, useState, useRef } from "react"

export function DropdownMenu() {
  const { pathname } = useRouter()
  const [isClosed, setIsClosed] = useState(true)
  const menuContainer = useRef(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuContainer.current && !menuContainer.current.contains(e.target)) {
        setIsClosed(true)
      }
    }

    document.addEventListener("click", handleClickOutside)
  }, [menuContainer])

  function toggleMenu() {
    setIsClosed(!isClosed)
  }

  return (
    <nav className={styles["dropdown--menu"]} ref={menuContainer}>
      <button
        className={styles["dropdown--trigger"]}
        data-close={isClosed}
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={!isClosed}
        aria-controls="menu1"
      >
        <Menu />
      </button>
      <ul
        className={`${styles["dropdown--container"]} ${
          isClosed ? [styles.collapsed] : ""
        }`}
        role="menu"
        aria-orientation="vertical"
        id="menu1"
        tabIndex={-1}
      >
        <li
          className={styles["dropdown--item"]}
          role="menuitem"
          aria-labelledby="item1"
        >
          <Link href="/">
            <a
              className={`${pathname === "/" ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
              id="item1"
            >
              Home
            </a>
          </Link>
        </li>
        {/* <li
          className={styles["dropdown--item"]}
          role="menuitem"
          aria-labelledby="item2"
        >
          <Link href="about-me">
            <a
              className={`${pathname === "/about-me" ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
              id="item2"
            >
              Sobre mim
            </a>
          </Link>
        </li> */}
        <li
          className={styles["dropdown--item"]}
          role="menuitem"
          aria-labelledby="item3"
        >
          <Link href="/projetos">
            <a
              className={`${pathname === "/projetos" ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
              id="item3"
            >
              Projetos
            </a>
          </Link>
        </li>
        <li
          className={styles["dropdown--item"]}
          role="menuitem"
          aria-labelledby="item4"
        >
          <Link href="/contato">
            <a
              className={`${pathname === "/contato" ? [styles.active] : ""}`}
              onClick={() => setIsClosed(true)}
              id="item4"
            >
              Começe um projeto
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
