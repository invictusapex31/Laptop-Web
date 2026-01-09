import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useConfig } from '../../context/ConfigContext'
import * as THREE from 'three'

const LaptopModel = () => {
  const { selectedComponents, isLidOpen, isExploded } = useConfig()
  const lidRef = useRef()
  const baseRef = useRef()
  const screenRef = useRef()

  useFrame(() => {
    if (lidRef.current) {
      const targetRotation = isLidOpen ? -Math.PI * 0.5 : 0
      lidRef.current.rotation.x = THREE.MathUtils.lerp(
        lidRef.current.rotation.x,
        targetRotation,
        0.1
      )
    }
  })

  const bodyColor = selectedComponents.bodyColor?.hex || '#C0C0C0'
  const explodeOffset = isExploded ? 0.5 : 0

  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <group ref={baseRef} position={[0, -explodeOffset, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshStandardMaterial color={bodyColor} metalness={0.6} roughness={0.4} />
        </mesh>
        
        {/* Keyboard */}
        <mesh position={[0, 0.11, 0.2]} castShadow>
          <boxGeometry args={[2.6, 0.02, 1.4]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.11, -0.5]} castShadow>
          <boxGeometry args={[1, 0.02, 0.6]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
      </group>

      {/* Lid */}
      <group ref={lidRef} position={[0, 0.1, -1]}>
        <group position={[0, 1, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3, 2, 0.1]} />
            <meshStandardMaterial color={bodyColor} metalness={0.6} roughness={0.4} />
          </mesh>

          {/* Screen */}
          <mesh ref={screenRef} position={[0, 0, 0.06]} castShadow>
            <boxGeometry args={[2.7, 1.7, 0.02]} />
            <meshStandardMaterial color="#000000" emissive="#1a1a2e" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </group>

      {/* Internal Components (visible in exploded view) */}
      {isExploded && (
        <>
          {/* RAM */}
          <mesh position={[0.5, explodeOffset * 2, 0]} castShadow>
            <boxGeometry args={[0.3, 0.05, 1]} />
            <meshStandardMaterial color="#00ff00" />
          </mesh>

          {/* Storage */}
          <mesh position={[-0.5, explodeOffset * 2, 0]} castShadow>
            <boxGeometry args={[0.4, 0.05, 0.6]} />
            <meshStandardMaterial color="#0088ff" />
          </mesh>

          {/* Battery */}
          <mesh position={[0, explodeOffset * 2.5, -0.3]} castShadow>
            <boxGeometry args={[2, 0.1, 0.8]} />
            <meshStandardMaterial color="#ff6600" />
          </mesh>
        </>
      )}
    </group>
  )
}

export default LaptopModel
