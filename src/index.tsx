import * as React from 'react'
import styles from './styles.module.css'

import HeaderTitle from './components/HeaderTitle'
import HeaderNav from './components/HeaderNav'

interface Props {
  projectName: string
}

const HeaderWatermark = ({ projectName }: Props) => {
  return (
    <header className={styles.watermark__header}>
      <HeaderTitle projectName={projectName} />
      <HeaderNav />
    </header>
  )
}

export default HeaderWatermark
