import { createContext, useContext, useEffect, useState } from 'react'
import users from '../data/users.json'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
  )

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const data = {
    user,
    logout() {
      setUser({})
    },
    login(username, password) {
      const currentUser = users.find(
        (user) => user.username === username && user.password === password
      )
      if (currentUser) {
        setUser(currentUser)
      } else {
        throw new Error('user not found')
      }
    },
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
