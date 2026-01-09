import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useConfig } from '../../context/ConfigContext'
import * as THREE from 'three'

const LaptopModel = () => {
  const { selectedComponents, isLidOpen, isExploded } = useConfig()
  const lidRef = useRef()
  const baseRef = useRef()
  const ramRef = useRef()
  const storageRef = useRef()
  const batteryRef = useRef()

  useFrame(() => {
    if (lidRef.current) {
      const targetRotation = isLidOpen ? -Math.PI * 0.45 : 0
      lidRef.current.rotation.x = THREE.MathUtils.lerp(
        lidRef.current.rotation.x,
        targetRotation,
        0.08
      )
    }
  })

  const bodyColor = selectedComponents.bodyColor?.hex || '#4a4a4a'
  const metalness = selectedComponents.bodyColor?.metalness || 0.9
  const roughness = selectedComponents.bodyColor?.roughness || 0.4
  const explodeOffset = isExploded ? 0.8 : 0

  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <group ref={baseRef} position={[0, -explodeOffset * 0.5, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.15, 2.2]} />
          <meshStandardMaterial 
            color={bodyColor} 
            metalness={metalness} 
            roughness={roughness}
            envMapIntensity={1.5}
          />
        </mesh>
        
        {/* Keyboard Deck */}
        <mesh position={[0, 0.08, 0.2]} castShadow>
          <boxGeometry args={[2.8, 0.02, 1.5]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.6} />
        </mesh>

        {/* Individual Keys */}
        {Array.from({ length: 60 }).map((_, i) => {
          const row = Math.floor(i / 12)
          const col = i % 12
          return (
            <mesh 
              key={i}
              position={[-1.3 + col * 0.22, 0.09, 0.8 - row * 0.22]} 
              castShadow
            >
              <boxGeometry args={[0.18, 0.02, 0.18]} />
              <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
            </mesh>
          )
        })}

        {/* Trackpad */}
        <mesh position={[0, 0.09, -0.6]} castShadow>
          <boxGeometry args={[1.2, 0.01, 0.7]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.2} />
        </mesh>
      </group>

      {/* Lid Assembly */}
      <group ref={lidRef} position={[0, 0.075, -1.1]}>
        <group position={[0, 1.1, 0]}>
          {/* Lid Back */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 2.2, 0.08]} />
            <meshStandardMaterial 
              color={bodyColor} 
              metalness={metalness} 
              roughness={roughness}
              envMapIntensity={1.5}
            />
          </mesh>

          {/* Screen Bezel */}
          <mesh position={[0, 0, 0.045]}>
            <boxGeometry args={[3.1, 2.1, 0.01]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>

          {/* Screen Display */}
          <mesh position={[0, 0, 0.055]}>
            <boxGeometry args={[2.8, 1.8, 0.01]} />
            <meshStandardMaterial 
              color="#000000" 
              emissive="#ff6b35" 
              emissiveIntensity={0.3}
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </group>
      </group>

      {/* Internal Components (visible in exploded view) */}
      {isExploded && (
        <>
          {/* RAM Module */}
          <mesh ref={ramRef} position={[0.6, explodeOffset * 1.5, 0]} castShadow>
            <boxGeometry args={[0.35, 0.05, 1.2]} />
            <meshStandardMaterial color="#00aa00" metalness={0.7} roughness={0.3} />
            <mesh position={[0, 0.03, 0]}>
              <boxGeometry args={[0.3, 0.01, 0.15]} />
              <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.2} />
            </mesh>
          </mesh>

          {/* NVMe SSD */}
          <mesh ref={storageRef} position={[-0.6, explodeOffset * 1.5, 0]} castShadow>
            <boxGeometry args={[0.45, 0.04, 0.8]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
            <mesh position={[0, 0.025, 0]}>
              <boxGeometry args={[0.3, 0.01, 0.3]} />
              <meshStandardMaterial color="#0066cc" metalness={0.5} roughness={0.3} />
            </mesh>
          </mesh>

          {/* Battery Pack */}
          <mesh ref={batteryRef} position={[0, explodeOffset * 2, -0.4]} castShadow>
            <boxGeometry args={[2.4, 0.12, 1]} />
            <meshStandardMaterial color="#ff6b35" metalness={0.3} roughness={0.6} />
          </mesh>

          {/* CPU (under heatsink) */}
          <mesh position={[0, explodeOffset * 1.8, 0.5]} castShadow>
            <boxGeometry args={[0.5, 0.08, 0.5]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>
        </>
      )}
    </group>
  )
}

export default LaptopModel
