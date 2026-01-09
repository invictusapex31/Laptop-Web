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
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Engineer Your
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Perfect Laptop
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          True modularity. Unlimited possibilities. Built by you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button onClick={handleConfigure} size="large">
            Start Building →
          </Button>
        </motion.div>

        {/* Laptop Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl overflow-hidden">
            {/* Laptop Screen */}
            <div className="absolute inset-8 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-gray-400 text-lg">Interactive 3D Laptop Configurator</p>
                <p className="text-gray-500 text-sm mt-2">Click "Start Building" to begin</p>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
