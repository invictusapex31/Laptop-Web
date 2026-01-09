import { createContext, useContext, useState } from 'react'
import { componentsData } from '../data/components'

const ConfigContext = createContext()

export const useConfig = () => useContext(ConfigContext)

export const ConfigProvider = ({ children }) => {
  const [selectedComponents, setSelectedComponents] = useState({
    screen: componentsData.screens[0],
    keyboard: componentsData.keyboards[0],
    ram: componentsData.ram[0],
    storage: componentsData.storage[0],
    gpu: componentsData.gpus[0],
    cpu: componentsData.cpus[0],
    battery: componentsData.batteries[0],
    ports: componentsData.ports[0],
    bodyColor: componentsData.bodyColors[0]
  })

  const [isLidOpen, setIsLidOpen] = useState(true)
  const [isExploded, setIsExploded] = useState(false)

  const updateComponent = (category, component) => {
    setSelectedComponents(prev => ({
      ...prev,
      [category]: component
    }))
  }

  const getTotalPrice = () => {
    return Object.values(selectedComponents).reduce((sum, comp) => sum + (comp?.price || 0), 0)
  }

  return (
    <ConfigContext.Provider value={{
      selectedComponents,
      updateComponent,
      getTotalPrice,
      isLidOpen,
      setIsLidOpen,
      isExploded,
      setIsExploded
    }}>
      {children}
    </ConfigContext.Provider>
  )
}
