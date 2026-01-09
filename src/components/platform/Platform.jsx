import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LeftSidebar from './LeftSidebar'
import Viewer3D from './Viewer3D'
import RightSidebar from './RightSidebar'

const Platform = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  if (!user) return null

  return (
    <div className="h-screen flex bg-gray-900 overflow-hidden">
      <LeftSidebar />
      <Viewer3D />
      <RightSidebar />
    </div>
  )
}

export default Platform
