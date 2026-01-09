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
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-accent cursor-pointer"
        >
          Framex
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-accent hover:text-primary transition">Features</a>
          <a href="#pricing" className="text-accent hover:text-primary transition">Pricing</a>
          <a href="#about" className="text-accent hover:text-primary transition">About</a>
        </div>

        <div className="flex gap-4">
          {user ? (
            <>
              <span className="text-accent py-3">Hi, {user.name}</span>
              <Button onClick={() => navigate('/platform')}>Platform</Button>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setIsAuthModalOpen(true)}>Login</Button>
              <Button onClick={() => setIsAuthModalOpen(true)}>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
