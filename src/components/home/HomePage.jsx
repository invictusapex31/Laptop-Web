import { useAuth } from '../../context/AuthContext'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import AuthModal from '../auth/AuthModal'

const HomePage = () => {
  const { isAuthModalOpen } = useAuth()

  return (
    <div className="min-h-screen bg-deepBlack">
      <Navbar />
      <Hero />
      <Features />
      {isAuthModalOpen && <AuthModal />}
    </div>
  )
}

export default HomePage
