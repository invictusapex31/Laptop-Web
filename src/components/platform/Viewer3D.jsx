import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useConfig } from '../../context/ConfigContext'
import LaptopModel from './LaptopModel'
import { Maximize2, Minimize2 } from 'lucide-react'

const Viewer3D = () => {
  const { isExploded, setIsExploded, isLidOpen, setIsLidOpen } = useConfig()

  return (
    <div className="flex-1 relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Environment preset="studio" />
        
        <LaptopModel />
      </Canvas>

      <div className="absolute top-6 left-6 space-y-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLidOpen(!isLidOpen)}
          className="bg-white px-4 py-2 rounded-lg shadow-lg font-medium text-accent hover:bg-gray-50 transition"
        >
          {isLidOpen ? 'Close Lid' : 'Open Lid'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExploded(!isExploded)}
          className="bg-white px-4 py-2 rounded-lg shadow-lg font-medium text-accent hover:bg-gray-50 transition flex items-center gap-2"
        >
          {isExploded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          {isExploded ? 'Normal View' : 'Exploded View'}
        </motion.button>
      </div>
    </div>
  )
}

export default Viewer3D
