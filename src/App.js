import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import EmojiGame from './components/EmojiGame'
import FlipMemoryGame from './components/FlipMemoryGame'
import MemoryMatrix from './components/MemoryMatrix'
import RockPaperScissor from './components/RockPaperScissor'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/emoji-game" component={EmojiGame} />
      <Route exact path="/memory-matrix" component={MemoryMatrix} />
      <Route exact path="/rock-paper-scissor" component={RockPaperScissor} />
      <Route exact path="/card-flip-memory-game" component={FlipMemoryGame} />
    </Switch>
  </>
)

export default App
