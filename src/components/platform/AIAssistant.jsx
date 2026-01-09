import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Mic, MicOff } from 'lucide-react'
import { useConfig } from '../../context/ConfigContext'
import { componentsData } from '../../data/components'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant. Tell me what you need, like "Add 32GB RAM" or "Show me gaming GPUs".' }
  ])
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)
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
        return 'Added 8GB RAM to your configuration.'
      } else if (lowerText.includes('16gb')) {
        updateComponent('ram', componentsData.ram[1])
        return 'Added 16GB RAM to your configuration.'
      } else if (lowerText.includes('32gb')) {
        updateComponent('ram', componentsData.ram[2])
        return 'Added 32GB RAM to your configuration.'
      } else if (lowerText.includes('64gb')) {
        updateComponent('ram', componentsData.ram[3])
        return 'Added 64GB RAM to your configuration.'
      }
    }

    // Storage commands
    if (lowerText.includes('storage') || lowerText.includes('ssd')) {
      if (lowerText.includes('256gb')) {
        updateComponent('storage', componentsData.storage[0])
        return 'Added 256GB SSD to your configuration.'
      } else if (lowerText.includes('512gb')) {
        updateComponent('storage', componentsData.storage[1])
        return 'Added 512GB SSD to your configuration.'
      } else if (lowerText.includes('1tb')) {
        updateComponent('storage', componentsData.storage[2])
        return 'Added 1TB SSD to your configuration.'
      } else if (lowerText.includes('2tb')) {
        updateComponent('storage', componentsData.storage[3])
        return 'Added 2TB SSD to your configuration.'
      }
    }

    // GPU commands
    if (lowerText.includes('gpu') || lowerText.includes('graphics')) {
      if (lowerText.includes('gaming') || lowerText.includes('rtx')) {
        if (lowerText.includes('4060')) {
          updateComponent('gpu', componentsData.gpus[2])
          return 'Added NVIDIA RTX 4060 for high-end gaming.'
        } else {
          updateComponent('gpu', componentsData.gpus[1])
          return 'Added NVIDIA RTX 3050 for gaming.'
        }
      }
    }

    // Color commands
    if (lowerText.includes('color') || lowerText.includes('body')) {
      if (lowerText.includes('blue') || lowerText.includes('midnight')) {
        updateComponent('bodyColor', componentsData.bodyColors[2])
        return 'Changed body color to Midnight Blue.'
      } else if (lowerText.includes('gray') || lowerText.includes('space')) {
        updateComponent('bodyColor', componentsData.bodyColors[1])
        return 'Changed body color to Space Gray.'
      } else if (lowerText.includes('rose') || lowerText.includes('gold')) {
        updateComponent('bodyColor', componentsData.bodyColors[3])
        return 'Changed body color to Rose Gold.'
      }
    }

    // Use case recommendations
    if (lowerText.includes('gaming')) {
      updateComponent('gpu', componentsData.gpus[2])
      updateComponent('ram', componentsData.ram[2])
      updateComponent('storage', componentsData.storage[2])
      return 'Configured for gaming: RTX 4060, 32GB RAM, 1TB SSD.'
    }

    if (lowerText.includes('programming') || lowerText.includes('development')) {
      updateComponent('ram', componentsData.ram[2])
      updateComponent('storage', componentsData.storage[2])
      updateComponent('cpu', componentsData.cpus[1])
      return 'Configured for development: 32GB RAM, 1TB SSD, i7 processor.'
    }

    return 'I can help you configure components. Try saying "Add 32GB RAM", "Change to midnight blue", or "Configure for gaming".'
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const response = processCommand(input)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 500)

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
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-neutral text-accent'
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 rounded-lg border-2 border-neutral focus:border-primary outline-none transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVoiceInput}
            className={`p-3 rounded-lg transition ${
              isListening ? 'bg-red-500 text-white' : 'bg-neutral text-accent'
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
