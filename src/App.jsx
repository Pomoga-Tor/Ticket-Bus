import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'

function App() {
  return (
    <div className="app">
      
      <nav className="navbar">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/booking" className="nav-link">Бронирование</Link>
      </nav>
      {/* <img src="./public/1.jpg" alt="Описание"></img> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  )
}

export default App