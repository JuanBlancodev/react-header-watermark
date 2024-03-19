import React from 'react'

interface Props {
  github: string
}

const HeaderLinkGithub = ({ github }: Props) => {
  return (
    <a href={github} target='_blank' rel='noreferrer'>
      Perfil de Github
    </a>
  )
}

export default HeaderLinkGithub
