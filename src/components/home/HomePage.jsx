import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import AuthModal from '../auth/AuthModal'

const HomePage = () => {
  const navigate = useNavigate()
  const { user, isAuthModalOpen } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-orange-50">
      <Navbar />
      <Hero />
      <Features />
      {isAuthModalOpen && <AuthModal />}
    </div>
  )
}

export default HomePage
