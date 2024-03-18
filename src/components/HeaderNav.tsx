import * as React from 'react'
import styles from '../styles.module.css'
import HeaderGithubLogo from './HeaderGithubLogo'
import HeaderLinkGithub from './HeaderLinkGithub'

const HeaderNav = () => {
  return (
    <nav className={styles.watermark__nav}>
      <ul className={styles.watermark__ul}>
        <li className={styles.watermark__li}>
          <HeaderGithubLogo />
          <HeaderLinkGithub />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
