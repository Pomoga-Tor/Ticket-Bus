import { useLocation } from 'react-router-dom'

export default function Confirmation() {
  const { state } = useLocation()
  const { passengerName, selectedSeats, route } = state || {}

  if (!state) {
    return (
      <div className="confirmation">
        <h2>Информация о бронировании не найдена</h2>
        <p>Пожалуйста, начните процесс бронирования заново</p>
      </div>
    )
  }

  return (
    <div className="confirmation">
      <h2>Бронирование подтверждено!</h2>
      <div className="confirmation-details">
        <p><strong>Пассажир:</strong> {passengerName}</p>
        <p><strong>Маршрут:</strong> {route}</p>
        <p><strong>Забронированные места:</strong> {selectedSeats.join(', ')}</p>
        <p><strong>Общая стоимость:</strong> {selectedSeats.length * 1500} руб.</p>
      </div>
      <p className="thank-you">Спасибо за использование нашего сервиса!</p>
    </div>
  )
}