import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Keyboard, Battery, Cpu, HardDrive, Zap, Usb, Palette } from 'lucide-react'
import { useConfig } from '../../context/ConfigContext'
import { componentsData } from '../../data/components'

const categories = [
  { id: 'screen', name: 'Screen', icon: Monitor, data: componentsData.screens },
  { id: 'keyboard', name: 'Keyboard', icon: Keyboard, data: componentsData.keyboards },
  { id: 'ram', name: 'RAM', icon: Cpu, data: componentsData.ram },
  { id: 'storage', name: 'Storage', icon: HardDrive, data: componentsData.storage },
  { id: 'gpu', name: 'GPU', icon: Zap, data: componentsData.gpus },
  { id: 'cpu', name: 'CPU', icon: Cpu, data: componentsData.cpus },
  { id: 'battery', name: 'Battery', icon: Battery, data: componentsData.batteries },
  { id: 'ports', name: 'Ports', icon: Usb, data: componentsData.ports },
  { id: 'bodyColor', name: 'Color', icon: Palette, data: componentsData.bodyColors }
]

const LeftSidebar = () => {
  const [activeCategory, setActiveCategory] = useState('screen')
  const { selectedComponents, updateComponent } = useConfig()

  const activeData = categories.find(c => c.id === activeCategory)

  return (
    <div className="w-80 bg-white shadow-xl flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-accent">Components</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-3 gap-2 p-4 border-b">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-3 rounded-lg flex flex-col items-center gap-2 transition ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral text-accent hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{cat.name}</span>
              </motion.button>
            )
          })}
        </div>

        <div className="p-4 space-y-3">
          {activeData?.data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => updateComponent(activeCategory, item)}
              className={`p-4 rounded-xl cursor-pointer transition border-2 ${
                selectedComponents[activeCategory]?.id === item.id
                  ? 'border-primary bg-orange-50'
                  : 'border-neutral hover:border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-accent">{item.name}</h3>
                <span className="text-primary font-bold">${item.price}</span>
              </div>
              <p className="text-sm text-gray-600">{item.specs}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
