import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Mic, MicOff, Sparkles } from 'lucide-react'
import { useConfig } from '../../context/ConfigContext'
import { componentsData } from '../../data/components'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI configuration assistant. Try commands like "Add 32GB RAM" or "Configure for gaming".' }
  ])
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const { updateComponent } = useConfig()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const processCommand = (text) => {
    const lowerText = text.toLowerCase()
    
    // RAM commands
    if (lowerText.includes('ram')) {
      if (lowerText.includes('8gb')) {
        updateComponent('ram', componentsData.ram[0])
        return '✓ Added 8GB DDR5-5600 RAM to your configuration.'
      } else if (lowerText.includes('16gb')) {
        updateComponent('ram', componentsData.ram[1])
        return '✓ Added 16GB DDR5-5600 RAM (+$75).'
      } else if (lowerText.includes('32gb')) {
        updateComponent('ram', componentsData.ram[2])
        return '✓ Added 32GB DDR5-5600 RAM (+$150).'
      }
    }

    // Storage commands
    if (lowerText.includes('storage') || lowerText.includes('ssd')) {
      if (lowerText.includes('256gb') || lowerText.includes('256')) {
        updateComponent('storage', componentsData.storage[0])
        return '✓ Added 256GB NVMe SSD (PCIe 4.0).'
      } else if (lowerText.includes('512gb') || lowerText.includes('512')) {
        updateComponent('storage', componentsData.storage[1])
        return '✓ Added 512GB Samsung NVMe SSD (+$80).'
      } else if (lowerText.includes('1tb') || lowerText.includes('1 tb')) {
        updateComponent('storage', componentsData.storage[2])
        return '✓ Added 1TB Samsung NVMe SSD (+$150).'
      }
    }

    // CPU commands
    if (lowerText.includes('cpu') || lowerText.includes('processor')) {
      if (lowerText.includes('intel')) {
        updateComponent('cpu', componentsData.cpus[0])
        return '✓ Selected Intel Core Ultra 7 155H (16 cores, up to 4.8 GHz).'
      } else if (lowerText.includes('amd') || lowerText.includes('ryzen')) {
        updateComponent('cpu', componentsData.cpus[1])
        return '✓ Selected AMD Ryzen 7 7840U (8 cores, up to 5.1 GHz).'
      }
    }

    // Color commands
    if (lowerText.includes('color') || lowerText.includes('body')) {
      if (lowerText.includes('black') || lowerText.includes('midnight')) {
        updateComponent('bodyColor', componentsData.bodyColors[2])
        return '✓ Changed body color to Midnight Black (+$30).'
      } else if (lowerText.includes('gray') || lowerText.includes('space')) {
        updateComponent('bodyColor', componentsData.bodyColors[0])
        return '✓ Changed body color to Space Gray.'
      } else if (lowerText.includes('silver')) {
        updateComponent('bodyColor', componentsData.bodyColors[1])
        return '✓ Changed body color to Silver.'
      }
    }

    // Use case recommendations
    if (lowerText.includes('gaming')) {
      updateComponent('ram', componentsData.ram[2])
      updateComponent('storage', componentsData.storage[2])
      updateComponent('cpu', componentsData.cpus[0])
      return '✓ Gaming configuration: Intel Core Ultra 7, 32GB RAM, 1TB SSD. Total: +$350'
    }

    if (lowerText.includes('programming') || lowerText.includes('development') || lowerText.includes('coding')) {
      updateComponent('ram', componentsData.ram[2])
      updateComponent('storage', componentsData.storage[2])
      updateComponent('cpu', componentsData.cpus[0])
      return '✓ Development configuration: Intel Core Ultra 7, 32GB RAM, 1TB SSD. Perfect for IDEs and containers.'
    }

    if (lowerText.includes('battery') || lowerText.includes('long')) {
      updateComponent('battery', componentsData.batteries[1])
      return '✓ Upgraded to 61Wh battery for 10-12 hours of use (+$40).'
    }

    return 'I can help you configure components. Try: "Add 32GB RAM", "Configure for gaming", "Change to midnight black", or "Show me storage options".'
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const response = processCommand(input)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsTyping(false)
    }, 800)

    setInput('')
  }

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported in this browser.')
      return
    }

    const recognition = new webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
    }

    recognition.start()
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-xl ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-deepBlack text-gray-200 border border-gray-800'
              }`}
            >
              {msg.role === 'assistant' && (
                <Sparkles className="w-4 h-4 inline mr-2 text-primary" />
              )}
              {msg.content}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-deepBlack text-gray-400 p-4 rounded-xl border border-gray-800">
              <div className="flex gap-1">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 rounded-lg bg-deepBlack border border-gray-700 focus:border-primary outline-none transition text-white placeholder-gray-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVoiceInput}
            className={`p-3 rounded-lg transition ${
              isListening ? 'bg-primary text-white' : 'bg-deepBlack text-gray-400 border border-gray-700'
            }`}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            className="p-3 bg-primary text-white rounded-lg"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default AIAssistant
