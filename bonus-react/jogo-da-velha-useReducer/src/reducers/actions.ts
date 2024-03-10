import { History } from './reducer'

export enum ActionTypes {
  UPDATE_SQUARES = 'UPDATE_SQUARES',
  SET_WHO_IS_WINNER = 'SET_WHO_IS_WINNER',
  RESET = 'RESET',
  UPDATE_HISTORY = 'UPDATE_HISTORY',
}

export function updateSquaresAction(squares: (string | null)[]) {
  return {
    type: ActionTypes.UPDATE_SQUARES,
    payload: squares,
  }
}
export function setWhoIsWinnerAction(winner: string) {
  return {
    type: ActionTypes.SET_WHO_IS_WINNER,
    payload: winner,
  }
}

export function updateHistoryAction(history: History[], index: number) {
  return { type: 'UPDATE_HISTORY', payload: [history, index] }
}

export function resetCurrentGameAction() {
  return {
    type: ActionTypes.RESET,
  }
}
