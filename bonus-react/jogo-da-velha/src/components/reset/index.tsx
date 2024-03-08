import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

export function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } =
    useContext(GameContext)

  function handleReset() {
    setSquares(Array(9).fill(null))
    setIsXNext(true)
    setWhoIsWinner('')
    setHistory([])
  }
  return (
    <button
      className="w-24 p-3 bg-slate-600 rounded-sm font-bold hover:opacity-70 hover:transition-opacity"
      type="button"
      onClick={handleReset}
    >
      Resetar
    </button>
  )
}
