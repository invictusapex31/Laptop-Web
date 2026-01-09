import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mic, DollarSign, ShoppingCart } from 'lucide-react'
import { useConfig } from '../../context/ConfigContext'
import { Button } from '../ui/Button'
import AIAssistant from './AIAssistant'

const RightSidebar = () => {
  const { selectedComponents, getTotalPrice } = useConfig()
  const [activeTab, setActiveTab] = useState('ai')

  return (
    <div className="w-96 bg-white shadow-xl flex flex-col">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-4 font-medium transition ${
            activeTab === 'ai'
              ? 'bg-primary text-white'
              : 'text-accent hover:bg-gray-50'
          }`}
        >
          AI Assistant
        </button>
        <button
          onClick={() => setActiveTab('price')}
          className={`flex-1 py-4 font-medium transition ${
            activeTab === 'price'
              ? 'bg-primary text-white'
              : 'text-accent hover:bg-gray-50'
          }`}
        >
          Summary
        </button>
      </div>

      {activeTab === 'ai' ? (
        <AIAssistant />
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <h3 className="text-xl font-bold text-accent mb-4">Configuration Summary</h3>
            
            {Object.entries(selectedComponents).map(([key, component]) => (
              <div key={key} className="flex justify-between items-start p-3 bg-neutral rounded-lg">
                <div>
                  <p className="font-medium text-accent capitalize">{key}</p>
                  <p className="text-sm text-gray-600">{component.name}</p>
                </div>
                <p className="font-bold text-primary">${component.price}</p>
              </div>
            ))}

            <div className="border-t-2 border-gray-300 pt-4 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">${getTotalPrice()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-bold">${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-xl mt-4">
                <span className="font-bold text-accent">Total</span>
                <span className="font-bold text-primary">${(getTotalPrice() * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="p-6 border-t space-y-3">
            <Button className="w-full flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="w-full">
              Save Configuration
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RightSidebar
