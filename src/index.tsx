import * as React from 'react'
import styles from './styles.module.css'

import HeaderTitle from './components/HeaderTitle'
import HeaderNav from './components/HeaderNav'

interface Props {
  projectName: string
  github: string
}

const HeaderWatermark = ({ projectName, github }: Props) => {
  return (
    <header className={styles.watermark__header}>
      <HeaderTitle projectName={projectName} />
      <HeaderNav github={github} />
    </header>
  )
}

export default HeaderWatermark
