import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Keyboard, Battery, Cpu, HardDrive, Palette, Usb } from 'lucide-react'
import { useConfig } from '../../context/ConfigContext'
import { componentsData } from '../../data/components'

const categories = [
  { id: 'screen', name: 'Display', icon: Monitor, data: componentsData.screens },
  { id: 'keyboard', name: 'Keyboard', icon: Keyboard, data: componentsData.keyboards },
  { id: 'ram', name: 'RAM', icon: Cpu, data: componentsData.ram },
  { id: 'storage', name: 'Storage', icon: HardDrive, data: componentsData.storage },
  { id: 'cpu', name: 'CPU', icon: Cpu, data: componentsData.cpus },
  { id: 'battery', name: 'Battery', icon: Battery, data: componentsData.batteries },
  { id: 'expansionCards', name: 'Ports', icon: Usb, data: componentsData.expansionCards },
  { id: 'bodyColor', name: 'Color', icon: Palette, data: componentsData.bodyColors }
]

const LeftSidebar = () => {
  const [activeCategory, setActiveCategory] = useState('screen')
  const { selectedComponents, updateComponent } = useConfig()

  const activeData = categories.find(c => c.id === activeCategory)

  return (
    <div className="w-80 bg-gray-800 shadow-2xl flex flex-col border-r border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-white tracking-tight">Components</h2>
        <p className="text-sm text-gray-400 mt-1">Select your configuration</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-2 p-4 border-b border-gray-700">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-3 rounded-lg flex flex-col items-center gap-2 transition border ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-900 text-gray-400 hover:text-white border-gray-700 hover:border-gray-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{cat.name}</span>
              </motion.button>
            )
          })}
        </div>

        <div className="p-4 space-y-3">
          {activeData?.data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => updateComponent(activeCategory, item)}
              className={`p-4 rounded-lg cursor-pointer transition border ${
                selectedComponents[activeCategory]?.id === item.id
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-700 hover:border-gray-600 bg-gray-900'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-sm">{item.name}</h3>
                <span className="text-primary font-bold text-sm">
                  {item.price === 0 ? 'Included' : `+$${item.price}`}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">{item.specs}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
