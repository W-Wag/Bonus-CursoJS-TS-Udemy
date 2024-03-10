import { useContext, useEffect } from 'react'
import { GameContext } from '../../contexts/game-context'
import { Square } from '../square'
import { calculateWinner } from '../../utils/calculate-winner'

export function Board() {
  const {
    state: { squares },
    updateWhoIsWinner,
  } = useContext(GameContext)

  useEffect(() => {
    const winner = calculateWinner(squares)
    if (winner) {
      updateWhoIsWinner(winner)
    }
  }, [squares])
  return (
    <div className="grid grid-cols-3">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
