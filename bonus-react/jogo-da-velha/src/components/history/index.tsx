import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

export function History() {
  const { history, setHistory, setSquares, setIsXNext, setWhoIsWinner } =
    useContext(GameContext)

  function handleLastPlay(index: number) {
    setSquares(history[index].squares)
    setIsXNext(history[index].isXNext)
    setWhoIsWinner(history[index].whoIsWinner)
    const newHistory = [...history]
    newHistory.splice(index, Number.MAX_SAFE_INTEGER)
    setHistory(newHistory)
  }
  return (
    <div>
      {history.map((__, index) => {
        return (
          <div className="" key={index}>
            <button
              type="button"
              onClick={() => handleLastPlay(index)}
              className="w-full h-10 my-1 bg-slate-500 text-centerhover:opacity-60 "
            >
              Voltar para jogada: {index}
            </button>
          </div>
        )
      })}
    </div>
  )
}
