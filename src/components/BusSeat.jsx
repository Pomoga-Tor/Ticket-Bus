export default function BusSeat({ seat, selected, onSelect }) {
  const seatClass = `seat ${selected ? 'selected' : ''} ${seat.reserved ? 'reserved' : ''}`
  
  return (
    <div 
      className={seatClass}
      onClick={() => !seat.reserved && onSelect(seat.id)}
    >
      {seat.id}
    </div>
  )
}