import { ActionTypes } from './actions'

export interface History {
  squares: (string | null)[]
  isXNext: boolean
  whoIsWinner: string
}

export interface GameState {
  squares: string[] | null[]
  isXNext: boolean
  whoIsWinner: string
  history: History[]
}

export const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: '',
  history: [],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gameReducer = (state: GameState, action: any) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SQUARES: {
      const { squares, history, isXNext, whoIsWinner } = state
      const newHistory = [
        ...history,
        {
          squares,
          isXNext,
          whoIsWinner,
        },
      ]

      const newState = { ...state }
      newState.squares = action.payload
      newState.isXNext = !isXNext
      newState.history = newHistory

      return newState
    }
    case ActionTypes.SET_WHO_IS_WINNER: {
      const newState = { ...state }
      newState.whoIsWinner = action.payload
      return newState
    }
    case ActionTypes.UPDATE_HISTORY: {
      const [history, index] = action.payload
      const { squares, whoIsWinner, isXNext } = history[index]

      const newHistory = [...history]
      newHistory.splice(index, Number.MAX_SAFE_INTEGER)
      const newState = {
        squares,
        whoIsWinner,
        isXNext,
        history: newHistory,
      }
      return newState
    }
    case ActionTypes.RESET: {
      return INITIAL_STATE
    }
    default:
      return state
  }
}
