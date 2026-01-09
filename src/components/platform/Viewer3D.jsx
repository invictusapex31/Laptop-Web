import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useConfig } from '../../context/ConfigContext'
import LaptopModel from './LaptopModel'
import { Maximize2, Minimize2, RotateCcw, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Viewer3D = () => {
  const { isExploded, setIsExploded, isLidOpen, setIsLidOpen } = useConfig()
  const navigate = useNavigate()

  return (
    <div className="flex-1 relative bg-gradient-to-b from-gray-900 to-gray-800">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.05}
        />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} />
        <pointLight position={[0, -5, 0]} intensity={0.3} color="#ff6b35" />
        
        <Environment preset="city" />
        
        <LaptopModel />
        
        {/* Ground plane for shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>

      {/* Top Controls */}
      <div className="absolute top-6 left-6 space-y-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="bg-gray-800 px-4 py-2 rounded-lg shadow-elevated font-semibold text-white hover:bg-gray-700 transition border border-gray-700 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </motion.button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsLidOpen(!isLidOpen)}
          className="bg-gray-800 px-6 py-3 rounded-lg shadow-elevated font-semibold text-white hover:bg-gray-700 transition border border-gray-700"
        >
          {isLidOpen ? 'Close Lid' : 'Open Lid'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsExploded(!isExploded)}
          className="bg-gray-800 px-6 py-3 rounded-lg shadow-elevated font-semibold text-white hover:bg-gray-700 transition border border-gray-700 flex items-center gap-2"
        >
          {isExploded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          {isExploded ? 'Normal View' : 'Exploded View'}
        </motion.button>
      </div>

      {/* Watermark */}
      <div className="absolute top-6 right-6">
        <div className="text-white font-bold text-2xl tracking-tight opacity-50">
          FRAMEX
        </div>
      </div>
    </div>
  )
}

export default Viewer3D
