import { motion } from 'framer-motion'
import { Cpu, Box, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Features = () => {
  const navigate = useNavigate()
  const { user, setIsAuthModalOpen } = useAuth()

  const features = [
    {
      icon: <Box className="w-12 h-12" />,
      title: 'Modular Design',
      description: 'Choose every component from screen to storage. Build exactly what you need.',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: '3D Visualization',
      description: 'See your laptop come to life in real-time 3D. Rotate, zoom, and explore.',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'AI Assistant',
      description: 'Voice-powered configuration. Just tell us what you need, we\'ll build it.',
      color: 'from-green-400 to-teal-400'
    }
  ]

  const handleConfigure = () => {
    if (user) {
      navigate('/platform')
    } else {
      setIsAuthModalOpen(true)
    }
  }

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-accent mb-16"
        >
          Why Choose Framex?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="flex gap-3">
                <Button onClick={handleConfigure} className="flex-1">Configure Now</Button>
                <Button variant="outline" className="flex-1">Learn More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
