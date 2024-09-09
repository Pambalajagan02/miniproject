import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import FlipRules from '../flipRules'
import Resultsflip from '../resultsflip'
import TimeupNext from '../timeup'
import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

const cardslist = cardsData.concat(cardsData)
const uniquelist = cardslist.map((each, index) => ({...each, id: index}))
console.log(uniquelist)
const randomlist = uniquelist.sort(() => Math.random() - 0.5)
console.log(randomlist)
class StartPlaying extends Component {
  state = {
    flippedCards: [],
    matchedCards: [],
    score: 0,
    flipCount: 0,
    time: 120,
    iswon: false,
    istimeup: false,
  }

  componentDidMount() {
    this.timerFunction()
  }

  componentWillUnmount() {
    clearInterval(this.timerid)
  }

  timerFunction = () => {
    this.timerid = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prev => {
      if (prev.time <= 0) {
        clearInterval(this.timerid)

        return {time: 0, istimeup: true}
      }
      return {time: prev.time - 1}
    })
  }

  backToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  playAgainFlip = () => {
    this.setState(
      {
        istimeup: false,
        iswon: false,
        matchedCards: [],
        time: 120,
        score: 0,
        flipCount: 0,
      },
      this.timerFunction,
    )
  }

  resetBoard = () => {
    this.setState({flippedCards: []})
    this.setState({lockBoard: false})
  }

  handleCardClick = id => {
    const {lockBoard, flippedCards, matchedCards, flipCount} = this.state
    if (lockBoard || flippedCards.includes(id) || matchedCards.includes(id))
      return

    const newFlippedCards = [...flippedCards, id]
    this.setState(prev => ({
      flippedCards: [...prev.flippedCards, id],
    }))

    if (newFlippedCards.length === 2) {
      this.setState({lockBoard: true, flipCount: flipCount + 1})

      const [firstIndex, secondIndex] = newFlippedCards

      const isMatch =
        uniquelist[firstIndex].name === uniquelist[secondIndex].name

      if (isMatch) {
        this.setState(prev => {
          const updatedcards = [...prev.matchedCards, firstIndex, secondIndex]
          const iswon = uniquelist.length === updatedcards.length
          return {
            matchedCards: updatedcards,
            score: prev.score + 1,
            iswon,
          }
        })
        this.resetBoard()
      } else {
        setTimeout(() => {
          this.resetBoard()
        }, 1500)
      }
    }
  }

  timerToString = seconds => {
    const minutes = Math.floor(seconds / 60)
    const sec = seconds % 60
    const formatedmin = minutes < 10 ? `0${minutes}` : minutes
    const formatedsec = sec < 10 ? `0${sec}` : sec
    return `${formatedmin}:${formatedsec}`
  }

  renderBasedOnFunc = () => {
    const {
      score,
      iswon,
      flippedCards,
      matchedCards,
      flipCount,
      istimeup,
      time,
    } = this.state
    if (iswon) {
      return (
        <Resultsflip playAgainFlip={this.playAgainFlip} flipCount={flipCount} />
      )
    }
    if (istimeup) {
      return (
        <TimeupNext playAgainFlip={this.playAgainFlip} flipCount={flipCount} />
      )
    }
    return (
      <div className="main2-con" id="startcon">
        <div className="inner-main-con">
          <div className="back-rules-button-container">
            <div className="back-container">
              <BiArrowBack className="iconstyle-rps" size={20} />
              <button
                type="button"
                className="backbutton-rps"
                onClick={this.backToHome}
              >
                Back
              </button>
            </div>
            <FlipRules />
          </div>
          <h1 className="h1hedflip">Card-Flip Memory Game</h1>
          <p className="timer-para">{this.timerToString(time)}</p>
          <div className="con-headers">
            <p className="count-para">Card flip count - {flipCount}</p>
            <p className="count-para">Score - {score}</p>
          </div>
          <ul className="memory-game">
            {uniquelist.map((eachitem, index) => (
              <li
                key={eachitem.id}
                className={`memory-card ${
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? 'flip'
                    : ''
                }`}
              >
                <div className="front-face">
                  <button
                    type="button"
                    data-testid={eachitem.name}
                    onClick={() => this.handleCardClick(index)}
                    className="foot-button"
                  >
                    <img
                      src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1721587291/foot-print_5footprints_w5mz7y.png"
                      alt="footprints"
                      className="footprints"
                    />
                  </button>
                </div>
                <div className="back-face">
                  <img
                    src={eachitem.image}
                    alt={eachitem.name}
                    className="footprints"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return this.renderBasedOnFunc()
  }
}
export default withRouter(StartPlaying)
