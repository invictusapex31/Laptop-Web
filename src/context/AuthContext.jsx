import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const login = (email, password) => {
    // Simple mock authentication
    setUser({ email, name: email.split('@')[0] })
    setIsAuthModalOpen(false)
    return true
  }

  const signup = (email, password, name) => {
    setUser({ email, name })
    setIsAuthModalOpen(false)
    return true
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      isAuthModalOpen, 
      setIsAuthModalOpen 
    }}>
      {children}
    </AuthContext.Provider>
  )
}
