import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Sobre from './pages/Sobre'
import Animacoes from './pages/Animacoes'
import Detalhes from './pages/Detalhes'
function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/animacoes" element={<Animacoes />} />
          <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
    </>
  )
}

export default App
