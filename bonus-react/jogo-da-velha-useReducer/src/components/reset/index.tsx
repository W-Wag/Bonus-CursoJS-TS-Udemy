import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

export function Reset() {
  const { resetCurrentGame } = useContext(GameContext)

  return (
    <button
      className="w-24 p-3 bg-slate-600 rounded-sm font-bold hover:opacity-70 hover:transition-opacity"
      type="button"
      onClick={resetCurrentGame}
    >
      Resetar
    </button>
  )
}
