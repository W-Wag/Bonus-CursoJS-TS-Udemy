import { Board } from './components/board-box'
import { History } from './components/history'
import { Player } from './components/player'
import { Reset } from './components/reset'
import { Winner } from './components/winner'

export function App() {
  return (
    <div className="max-w-2xl m-auto space-y-2">
      <Player />
      <Winner />
      <Reset />
      <Board />
      <History />
    </div>
  )
}
