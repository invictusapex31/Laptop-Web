import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mic, ShoppingCart, Save } from 'lucide-react'
import { useConfig } from '../../context/ConfigContext'
import { Button } from '../ui/Button'
import AIAssistant from './AIAssistant'

const RightSidebar = () => {
  const { selectedComponents, getTotalPrice } = useConfig()
  const [activeTab, setActiveTab] = useState('ai')

  return (
    <div className="w-96 bg-charcoal shadow-2xl flex flex-col border-l border-gray-800">
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-4 font-semibold transition ${
            activeTab === 'ai'
              ? 'bg-primary text-white'
              : 'text-gray-400 hover:text-white hover:bg-deepBlack'
          }`}
        >
          AI Assistant
        </button>
        <button
          onClick={() => setActiveTab('summary')}
          className={`flex-1 py-4 font-semibold transition ${
            activeTab === 'summary'
              ? 'bg-primary text-white'
              : 'text-gray-400 hover:text-white hover:bg-deepBlack'
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => setActiveTab('specs')}
          className={`flex-1 py-4 font-semibold transition ${
            activeTab === 'specs'
              ? 'bg-primary text-white'
              : 'text-gray-400 hover:text-white hover:bg-deepBlack'
          }`}
        >
          Specs
        </button>
      </div>

      {activeTab === 'ai' ? (
        <AIAssistant />
      ) : activeTab === 'summary' ? (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Configuration</h3>
            
            {Object.entries(selectedComponents).map(([key, component]) => (
              <div key={key} className="flex justify-between items-start p-3 bg-deepBlack rounded-lg border border-gray-800">
                <div>
                  <p className="font-semibold text-white capitalize text-sm">{key}</p>
                  <p className="text-xs text-gray-400 font-mono mt-1">{component.name}</p>
                </div>
                <p className="font-bold text-primary">
                  {component.price === 0 ? 'Inc.' : `$${component.price}`}
                </p>
              </div>
            ))}

            <div className="border-t border-gray-700 pt-4 mt-4">
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-bold text-white">${getTotalPrice()}</span>
              </div>
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-gray-400">Tax (10%)</span>
                <span className="font-bold text-white">${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-xl mt-4">
                <span className="font-bold text-white">Total</span>
                <span className="font-bold text-primary">${(getTotalPrice() * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-800 space-y-3">
            <Button className="w-full flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Save Configuration
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-6">
          <h3 className="text-xl font-bold text-white mb-6">Technical Specifications</h3>
          <div className="space-y-4 font-mono text-sm">
            {Object.entries(selectedComponents).map(([key, component]) => (
              <div key={key} className="bg-deepBlack rounded-lg p-4 border border-gray-800">
                <p className="text-primary font-bold mb-2 uppercase text-xs">{key}</p>
                <p className="text-white mb-1">{component.name}</p>
                <p className="text-gray-400 text-xs">{component.specs}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RightSidebar
