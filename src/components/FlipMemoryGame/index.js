import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import StartPlaying from '../startFlip'
import './index.css'

const rulesof = [
  {
    id: 1,
    rulename:
      'When the game is started, the users should be able to see the list of Cards that are shuffled and turned face down.',
  },
  {
    id: 2,
    rulename:
      'When a user starts the game, the user should be able to see the Timer running.',
  },
  {
    id: 3,
    rulename: 'The Timer starts from 2 Minutes.',
  },
  {
    id: 4,
    rulename:
      'If the two cards have the same image, they remain face up. If not, they should be flipped face down again after a short 2 seconds.',
  },
  {
    id: 5,
    rulename: 'Users should be able to compare only two cards at a time.',
  },
  {
    id: 6,
    rulename:
      'When the user is not able to find all the cards before the timer ends then the game should end and redirect to the Time Up Page.',
  },
  {
    id: 7,
    rulename:
      'If the user finds all the matching cards before the timer ends, then the user should be redirected to the results page.',
  },
]

class FlipMemoryGame extends Component {
  state = {isFlipStart: true}

  onClikStartFlipGame = () => {
    this.setState({isFlipStart: false})
  }

  onClickBackFlip = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isFlipStart} = this.state
    return isFlipStart ? (
      <div className="rock-paper-Main" id="flipmemotry">
        <div className="inner-main-con">
          <div className="back-container-rps">
            <BiArrowBack className="iconstyle-rps" size={20} />
            <button
              type="button"
              className="backbutton-rps"
              onClick={this.onClickBackFlip}
            >
              Back
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720418685/animalsmemorygame_xvqi83.png"
            className="img_rule"
            alt="card flip memory game"
          />
          <h1 className="main-heading">Rules</h1>
          <ul className="ul-rps-conatiner">
            {rulesof.map(each => (
              <li key={each.id} className="list-of-rules">
                {each.rulename}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="button-rps"
            onClick={this.onClikStartFlipGame}
          >
            Start Playing
          </button>
        </div>
      </div>
    ) : (
      <StartPlaying />
    )
  }
}

export default FlipMemoryGame
