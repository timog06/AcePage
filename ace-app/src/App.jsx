import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import './styles/main.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
