import { useContext } from 'react'
import { GameContext } from '../../contexts/game-context'

export function Player() {
  const { isXNext } = useContext(GameContext)
  return (
    <h1 className="text-2xl text-center px-5">Player: {isXNext ? 'X' : 'O'}</h1>
  )
}
