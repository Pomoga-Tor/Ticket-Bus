import { useState } from 'react'
import BusSeat from './BusSeat'

export default function SeatMap({ seats, onSeatSelect }) {
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSelect = (seatId) => {
    const newSelected = selectedSeats.includes(seatId)
      ? selectedSeats.filter(id => id !== seatId)
      : [...selectedSeats, seatId]
    
    setSelectedSeats(newSelected)
    onSeatSelect(newSelected)
  }

  return (
    <div className="bus-layout">
      <div className="driver">Водитель</div>
      <div className="seats-grid">
        {seats.map(seat => (
          <BusSeat
            key={seat.id}
            seat={seat}
            selected={selectedSeats.includes(seat.id)}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="seat available"></div>
          <span>Доступно</span>
        </div>
        <div className="legend-item">
          <div className="seat selected"></div>
          <span>Выбрано</span>
        </div>
        <div className="legend-item">
          <div className="seat reserved"></div>
          <span>Занято</span>
        </div>
      </div>
    </div>
  )
}