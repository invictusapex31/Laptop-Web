import { motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user, setIsAuthModalOpen, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-2xl font-bold text-white cursor-pointer tracking-tight"
        >
          FRAMEX
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-gray-300 hover:text-primary transition font-medium">Features</a>
          <a href="#specs" className="text-gray-300 hover:text-primary transition font-medium">Specs</a>
          <a href="#community" className="text-gray-300 hover:text-primary transition font-medium">Community</a>
        </div>

        <div className="flex gap-3">
          {user ? (
            <>
              <span className="text-gray-300 py-3 font-medium">Hi, {user.name}</span>
              <Button onClick={() => navigate('/platform')} size="small">Platform</Button>
              <Button variant="secondary" size="small" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="secondary" size="small" onClick={() => setIsAuthModalOpen(true)}>Login</Button>
              <Button size="small" onClick={() => setIsAuthModalOpen(true)}>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
