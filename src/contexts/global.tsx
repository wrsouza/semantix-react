import React, { useState, useEffect, createContext, useContext } from 'react'
import { GithubRepoType, GithubUserType, GlobalContextType, GlobalPropsType } from './types'

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

export const GlobalProvider: React.FC<GlobalPropsType> = ({ children }) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(false)
  const [user, setUser] = useState<GithubUserType | undefined>()
  const [repos, setRepos] = useState<GithubRepoType[]>([])

  useEffect(() => {
    const getUserStorage = () => {
      const userStorage = localStorage.getItem('user-storage')
      if (userStorage) {
        console.log('ok')
        setUser(JSON.parse(userStorage))
      }
    }
    getUserStorage()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoaderVisible,
        setIsLoaderVisible,
        user,
        setUser,
        repos,
        setRepos
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext<GlobalContextType>(GlobalContext)
}
