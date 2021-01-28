import React from 'react'
import { formatDistance } from 'date-fns'
import { GithubRepoType } from '../../contexts/types'

import { Container, IconStar, IconClock } from './styles'

type PropsType = {
  repo: GithubRepoType
}

const Repository: React.FC<PropsType> = ({ repo }) => {
  return (
    <Container>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className="name">{repo.name}</a>
      <p className="description">{repo.description}</p>
      <p className="info">
        <span className="info-item"><IconStar />{repo.stargazers_count} stars</span>
        <span className="info-item"><IconClock />Updated {formatDistance(new Date(repo.updated_at), new Date())} ago</span>
      </p>
    </Container>
  )
}

export default Repository
