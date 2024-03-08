import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface GameContextProps {
  children: ReactNode
}

interface History {
  squares: (string | null)[]
  isXNext: boolean
  whoIsWinner: string
}

export interface GameContextType {
  squares: string[] | null[]
  setSquares: Dispatch<SetStateAction<Array<string | null>>>
  isXNext: boolean
  setIsXNext: Dispatch<SetStateAction<boolean>>
  whoIsWinner: string
  setWhoIsWinner: Dispatch<SetStateAction<string>>
  history: History[]
  setHistory: Dispatch<SetStateAction<History[]>>
}

export const GameContext = createContext({} as GameContextType)

export function GameContextProvider({ children }: GameContextProps) {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [whoIsWinner, setWhoIsWinner] = useState('')
  const [history, setHistory] = useState<History[]>([])
  return (
    <GameContext.Provider
      value={{
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setWhoIsWinner,
        history,
        setHistory,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
