import * as React from 'react'
import styles from '../styles.module.css'

interface Props {
  projectName: string
}

const HeaderTitle = ({ projectName }: Props) => {
  return <h1 className={styles.watermark__title}>{projectName}</h1>
}

export default HeaderTitle
