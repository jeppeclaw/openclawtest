import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AnotherRoute from './pages/AnotherRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/another" element={<AnotherRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
