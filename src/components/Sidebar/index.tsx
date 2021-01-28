import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobal } from '../../contexts/global'

import {
  Container,
  IconBars,
  IconTimes,
  Background,
  IconUsers,
  IconHeart,
  IconStar,
  IconCompany,
  IconLocation,
  IconEmail,
  IconSite,
  IconTwitter
} from './styles'

const Sidebar: React.FC = () => {
  const history = useHistory()
  const [stars, setStars] = useState<number>(0)
  const { user, repos } = useGlobal()
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)

  useEffect(() => {
    const getStars = () => {
      setStars(repos.reduce((total, item) => total + item.stargazers_count, 0))
    }
    getStars()
  }, [repos])

  return (
    <>
    <Container isVisible={sidebarVisible}>
      <img src={user?.avatar_url} alt={user?.name} className="user-img" />
      <span className="user-name">{user?.name}</span>
      <span className="user-login">@{user?.login}</span>
      {user?.bio ? (<p className="user-bio">{user?.bio}</p>) : null}
      <div className="user-status">
        <span className="user-status-item"><IconUsers />{user?.followers} followers</span>
        <span className="user-status-item"><IconHeart />{user?.following} folowing</span>
        <span className="user-status-item"><IconStar />{stars} stars</span>
      </div>
      <div className="user-info">
        {user?.company
          ? (
          <div className="user-info-item">
            <IconCompany />{user?.company}
          </div>
            )
          : null}
        {user?.location
          ? (
          <div className="user-info-item">
            <IconLocation />{user?.location}
          </div>
            )
          : null}
        {user?.email
          ? (
          <div className="user-info-item">
            <IconEmail />{user?.email}
          </div>
            )
          : null}
        {user?.blog
          ? (
            <div className="user-info-item">
              <a href={user?.blog} target="_blank" rel="noreferrer">
                <IconSite />{user?.blog}
              </a>
            </div>
            )
          : null}
        {user?.twitter_username
          ? (
            <div className="user-info-item">
              <a href={`https://twitter.com/${user?.twitter_username}`} target="_blank" rel="noreferrer">
                <IconTwitter />@{user?.twitter_username}
              </a>
            </div>
            )
          : null}
      </div>
      <button onClick={() => history.goBack()} className="btn-goback">Voltar</button>
    </Container>
    <IconBars isVisible={!sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)} />
    <IconTimes isVisible={sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)} />
    <Background isVisible={sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)} />
    </>
  )
}

export default Sidebar
