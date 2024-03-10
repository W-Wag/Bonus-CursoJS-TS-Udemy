import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

export function Winner() {
  const {
    state: { whoIsWinner },
  } = useContext(GameContext)
  if (!whoIsWinner) return <></>

  return (
    <p className="text-xl text-center font-semibold text-green-500 animate-pulse">
      <span className="font-bold text-slate-300">{whoIsWinner}</span> ganhou!
    </p>
  )
}
