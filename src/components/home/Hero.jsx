import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Hero = () => {
  const navigate = useNavigate()
  const { user, setIsAuthModalOpen } = useAuth()

  const handleConfigure = () => {
    if (user) {
      navigate('/platform')
    } else {
      setIsAuthModalOpen(true)
    }
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-bold text-accent mb-6"
        >
          Build Your Perfect
          <span className="text-primary"> Laptop</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Experience the future of laptop customization with our 3D configurator
          and AI-powered assistant. Every component, your choice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Button onClick={handleConfigure}>Start Building</Button>
          <Button variant="outline">Watch Demo</Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
