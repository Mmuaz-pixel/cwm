import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Token from './pages/Token'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </Router>
  )
}

export default App
