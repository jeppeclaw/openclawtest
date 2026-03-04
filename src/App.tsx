import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AnotherRoute from './pages/AnotherRoute'
import Random from './pages/Random'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/another" element={<AnotherRoute />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
