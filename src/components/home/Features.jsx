import { motion } from 'framer-motion'
import { Cpu, Box, Sparkles, Monitor } from 'lucide-react'
import { componentsData } from '../../data/components'

const Features = () => {
  const components = [
    { category: 'Display', icon: Monitor, items: componentsData.screens },
    { category: 'CPU', icon: Cpu, items: componentsData.cpus },
    { category: 'RAM', icon: Box, items: componentsData.ram },
    { category: 'Storage', icon: Sparkles, items: componentsData.storage }
  ]

  return (
    <section id="features" className="py-32 px-6 bg-deepBlack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-section font-bold text-white mb-6">
            Every Component. Your Choice.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional-grade components with complete technical transparency.
            No compromises, no locked specifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((comp, index) => {
            const Icon = comp.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal rounded-xl p-6 border border-gray-800 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-white">{comp.category}</h3>
                </div>
                <div className="space-y-3">
                  {comp.items.slice(0, 2).map((item) => (
                    <div key={item.id} className="bg-deepBlack rounded-lg p-3">
                      <p className="text-white font-medium text-sm mb-1">{item.name}</p>
                      <p className="text-gray-500 text-xs font-mono">{item.specs}</p>
                      <p className="text-primary font-bold text-sm mt-2">
                        {item.price === 0 ? 'Included' : `+$${item.price}`}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
