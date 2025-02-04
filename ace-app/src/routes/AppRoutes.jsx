import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Stats from '../pages/Stats'
import Rules from '../pages/Rules'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  )
}

export default AppRoutes
