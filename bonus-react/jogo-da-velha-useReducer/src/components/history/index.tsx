import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

export function History() {
  const {
    state: { history },
    updateHistory,
  } = useContext(GameContext)

  return (
    <div>
      {history.map((__, index) => {
        return (
          <div className="" key={index}>
            <button
              type="button"
              onClick={() => updateHistory(history, index)}
              className="w-full h-10 my-1 bg-slate-500 text-center hover:opacity-60 "
            >
              Voltar para jogada: {index}
            </button>
          </div>
        )
      })}
    </div>
  )
}
