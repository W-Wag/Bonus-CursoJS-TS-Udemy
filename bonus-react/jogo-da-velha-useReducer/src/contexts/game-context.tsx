import { ReactNode, createContext, useReducer } from 'react'
import {
  GameState,
  History,
  INITIAL_STATE,
  gameReducer,
} from '../reducers/reducer'
import {
  resetCurrentGameAction,
  setWhoIsWinnerAction,
  updateHistoryAction,
  updateSquaresAction,
} from '../reducers/actions'

interface GameContextProps {
  children: ReactNode
}

export interface GameContextType {
  state: GameState
  resetCurrentGame: () => void
  updateSquare: (square: (string | null)[]) => void
  updateWhoIsWinner: (winner: string) => void
  updateHistory: (history: History[], index: number) => void
}

export const GameContext = createContext({} as GameContextType)

export function GameContextProvider({ children }: GameContextProps) {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE)

  function updateSquare(square: (string | null)[]) {
    dispatch(updateSquaresAction(square))
  }

  function updateHistory(history: History[], index: number) {
    dispatch(updateHistoryAction(history, index))
  }

  function resetCurrentGame() {
    dispatch(resetCurrentGameAction())
  }

  function updateWhoIsWinner(winner: string) {
    dispatch(setWhoIsWinnerAction(winner))
  }

  return (
    <GameContext.Provider
      value={{
        state,
        updateSquare,
        updateHistory,
        updateWhoIsWinner,
        resetCurrentGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
