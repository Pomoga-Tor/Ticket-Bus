import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SeatMap from '../components/SeatMap'
// import data from './data.json'
export default function Booking() {
  const navigate = useNavigate()
  const [selectedSeats, setSelectedSeats] = useState([])
  const [passengerName, setPassengerName] = useState('')
  const [route, setRoute] = useState('Москва - Санкт-Петербург')
  
  // Пример данных о местах в автобусе
  const [seats, setSeats] = useState([
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: false },
    { id: 4, reserved: true },
    { id: 5, reserved: false },
    { id: 6, reserved: false },
    { id: 7, reserved: true},
    { id: 8, reserved: false },
    { id: 9, reserved: false},
    { id: 10, reserved: false },
    { id: 11, reserved: false },
    { id: 12, reserved: false },
  ])

  const handleBooking = () => {
    if (!passengerName || selectedSeats.length === 0) {
      alert('Пожалуйста, заполните все поля и выберите места')
      return
    }

    // Обновляем статус выбранных мест
    const updatedSeats = seats.map(seat => 
      selectedSeats.includes(seat.id) ? { ...seat, reserved: true } : seat
    )
    
    setSeats(updatedSeats)
    navigate('/confirmation', { 
      state: { 
        passengerName, 
        selectedSeats, 
        route 
      } 
    })
  }

  return (
    <div className="booking-page">
      <h2>Бронирование мест</h2>
      
      <div className="booking-form">
        <div className="form-group">
          <label>Маршрут:</label>
          <select 
            value={route} 
            onChange={(e) => setRoute(e.target.value)}
            className="form-control"
          >
            <option>Волгоград - Элиста</option>
            <option>Волгоград - Казань</option>
            <option>Геленджик - Сочи</option>
             <option>Сочи - Санкт-Петербург</option>
            <option>Саратов - Пенза</option>
            <option>Волгоград - Сочи</option>
            <option>Ставраполь - Краснодар</option>
            <option>Нижний-Новгород - Пермь</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Ваше имя:</label>
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            className="form-control"
            placeholder="Введите ваше имя"
          />
        </div>
      </div>
      
      <h3>Выберите места:</h3>
      <SeatMap 
        seats={seats} 
        onSeatSelect={setSelectedSeats} 
      />
      
      <div className="booking-summary">
        <p>Выбрано мест: {selectedSeats.length}</p>
        <p>Общая стоимость: {selectedSeats.length * 1500} руб.</p>
      </div>
      
      <button 
        onClick={handleBooking}
        className="btn btn-primary"
      >
        Подтвердить бронирование
      </button>
    </div>
  )
}