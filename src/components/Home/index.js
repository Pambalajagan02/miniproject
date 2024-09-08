import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="Home-Container">
    <h1 className="heading">Games</h1>
    <ul className="home-contaer1">
      <Link to="/emoji-game" className="linkclass">
        <li className="Game-card">
          <h1 className="rock-des orderhed1">Emoji Game</h1>
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720423171/Asset_1_4x_1emoji2_ppiy5w.png"
            alt="emoji game"
            className="emojigame orderimg1"
          />
        </li>
      </Link>
      <Link to="/memory-matrix" className="linkclass">
        <li className="Game-card">
          <h1 className="rock-des">Memory Matrix</h1>
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720423287/memorymatrix1_styw7u.png"
            alt="memory matrix"
            className="emojigame"
          />
        </li>
      </Link>
      <Link to="/rock-paper-scissor" className="linkclass">
        <li className="Game-card">
          <h1 className="rock-des">ROCK PAPER SCISSOR</h1>
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720418072/Group_7469rps_appvqa.png"
            alt="rock paper scissor"
            className="rpsigame"
          />
        </li>
      </Link>
      <Link to="/card-flip-memory-game" className="linkclass">
        <li className="Game-card">
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720418685/animalsmemorygame_xvqi83.png"
            alt="card flip memory game"
            className="memoryigame"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default Home
