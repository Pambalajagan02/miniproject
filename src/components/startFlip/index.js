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

const randomlist = uniquelist.sort(() => Math.random() - 0.5)

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
    this.setState({istimeup: false, iswon: false})
  }

  handleCardClick = index => {
    const {flippedCards, matchedCards, flipCount} = this.state

    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    )
      return

    const newFlippedCards = [...flippedCards, index]
    this.setState({flippedCards: newFlippedCards})

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards
      if (cardslist[firstIndex].name === cardslist[secondIndex].name) {
        this.setState(prev => {
          const newcards = [...prev.matchedCards, firstIndex, secondIndex]
          if (newcards.length === cardslist.length) {
            clearInterval(this.timerid)
            const newcardsofar = {
              matchedCards: newcards,
              score: prev.score + 1,
              flippedCards: [],
              iswon: true,
            }
            return newcardsofar
          }
          return ''
        })
      }
      setTimeout(() => this.setState({flippedCards: []}), 1000)
    }

    this.setState({flipCount: flipCount + 1})
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
      return <Resultsflip playAgainFlip={this.playAgainFlip} />
    }
    if (istimeup) {
      return <TimeupNext playAgainFlip={this.playAgainFlip} />
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
            <p className="count-para">Card flip count -{flipCount}</p>
            <p className="count-para">Score - {score}</p>
          </div>
          <ul className="game-container-flip">
            {randomlist.map(card => (
              <li key={card.id} className="list-style-con">
                <button
                  type="button"
                  className={`buttonflip ${
                    flippedCards.includes(card.id) ||
                    matchedCards.includes(card.id)
                      ? 'flipped'
                      : ''
                  }`}
                  onClick={() => this.handleCardClick(card.id)}
                >
                  <div className="card">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="card-img front"
                    />
                    <img
                      src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1721587291/foot-print_5footprints_w5mz7y.png"
                      alt="back"
                      className="card-img back"
                    />
                  </div>
                </button>
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
