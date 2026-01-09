import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from './context/ConfigContext'
import { AuthProvider } from './context/AuthContext'
import HomePage from './components/home/HomePage'
import Platform from './components/platform/Platform'

function App() {
  return (
    <Router>
      <AuthProvider>
        <ConfigProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<Platform />} />
          </Routes>
        </ConfigProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
