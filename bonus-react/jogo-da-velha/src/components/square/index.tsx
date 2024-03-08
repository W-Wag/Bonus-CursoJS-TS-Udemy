import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

interface SquareProps {
  value: string | null
  index: number
}

export function Square({ value, index }: SquareProps) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext)

  function handleClick() {
    if (squares[index]) return
    if (whoIsWinner.length > 0) return
    const newSquares = [...squares]
    newSquares[index] = isXNext ? 'X' : 'O'
    setIsXNext(!isXNext)
    setSquares(newSquares)
    const newHistory = [...history]
    const newHistoryItem = {
      squares: [...squares],
      isXNext: !isXNext,
      whoIsWinner,
    }

    newHistory.push(newHistoryItem)

    setHistory(newHistory)
  }
  return (
    <button
      className="w-full h-full flex justify-center items-center text-9xl ring-1 ring-gray-400 after:block after:pb-[100%]"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}
