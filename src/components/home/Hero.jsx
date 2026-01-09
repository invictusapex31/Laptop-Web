import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'

const HeroLaptop = () => {
  return (
    <group rotation={[0.2, -0.3, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.08, 0.2]} castShadow>
        <boxGeometry args={[2.6, 0.02, 1.4]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      <group position={[0, 0.075, -1]} rotation={[-Math.PI * 0.4, 0, 0]}>
        <group position={[0, 1, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3, 2, 0.08]} />
            <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <boxGeometry args={[2.7, 1.7, 0.02]} />
            <meshStandardMaterial color="#000000" emissive="#ff6b35" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

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
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
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
              Start Building
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[500px] rounded-2xl overflow-hidden bg-gray-800/50"
        >
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 2, 6]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b35" />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <HeroLaptop />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
