import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'

import EmojiHeader from '../emojiHeader'

import RulesViewEmoji from '../EmojiRules'

import './index.css'

const rulesof = [
  {id: 1, rulename: 'User should be able to see the list of Emojis'},
  {
    id: 2,
    rulename:
      'When the user clicks any one of the Emoji for the first time, then the count of the score should be incremented by 1 and the List of emoji cards should be shuffled.',
  },
  {
    id: 3,
    rulename:
      'This process should be repeated every time the user clicks on an emoji card',
  },
  {
    id: 4,
    rulename:
      'When the user clicks on all Emoji cards without clicking any of it twice, then the user will win the game',
  },
  {
    id: 5,
    rulename:
      'When the user clicks on the same Emoji for the second time, then the user will lose the game.',
  },
  {
    id: 6,
    rulename:
      'Once the game is over, the user will be redirected to the results page.',
  },
]

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]
let wonorloose = ''
let isWinImageUrl = ''
let altval = ''

class EmojiGame extends Component {
  state = {isstart: false, iswon: false, clicklist: []}

  onClickStartPlaying = () => {
    this.setState({isstart: true})
  }

  onClickPlayAgain = () => {
    this.setState({iswon: false, clicklist: []})
  }

  onClickBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickEmoji = id => {
    const {clicklist} = this.state

    emojisList.sort(() => Math.random() - 0.5)

    const isprasent = clicklist.includes(id)
    if (isprasent) {
      this.setState({iswon: true})
    } else {
      this.setState(prev => ({clicklist: [...prev.clicklist, id]}))
    }
    if (clicklist.length === emojisList.length - 1) {
      altval = 'won'
      wonorloose = 'You won'
      isWinImageUrl =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720526526/Imageyouwon_ikd2mt.png'
      this.setState({iswon: true})
    } else {
      altval = 'lose'
      wonorloose = 'You lose'
      isWinImageUrl =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720526623/Imageyoulose_fky2oy.png'
    }
  }

  renderRulesView = () => (
    <div className="EmojiGameContainer">
      <div className="back-button-container">
        <BiArrowBack className="iconstyle" size={20} />
        <button type="button" className="backbutton" onClick={this.onClickBack}>
          Back
        </button>
      </div>
      <div className="rulescontent-view">
        <div className="rules-img-hed-con">
          <h1 className="rock-des-rule">Emoji Game</h1>
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720423171/Asset_1_4x_1emoji2_ppiy5w.png"
            alt="emoji game"
            className="emojigamerule"
          />
        </div>
        <div className="rules-flex-container">
          <h1 className="ruleshed">Rules</h1>
          <ul className="ulcontainer">
            {rulesof.map(each => (
              <li key={each.id} className="liststyles">
                {each.rulename}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="start-button"
            onClick={this.onClickStartPlaying}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )

  renderStartGameView = () => {
    const {clicklist} = this.state
    return (
      <div className="gameviewContainer">
        <EmojiHeader score={clicklist.length} />

        <div className="back-rules-button-container">
          <div className="back-container">
            <BiArrowBack className="iconstyle" size={20} />
            <button
              type="button"
              className="backbutton2"
              onClick={this.onClickBack}
            >
              Back
            </button>
          </div>
          <RulesViewEmoji />
        </div>
        <h1>Emoji Game</h1>

        <ul className="emojisulcontainer">
          {emojisList.map(each => (
            <li key={each.id} className="emojisinlist">
              <button
                type="button"
                className="buttonemoji"
                onClick={() => this.onClickEmoji(each.id)}
              >
                <img
                  src={each.emojiUrl}
                  className="emojiimg"
                  alt={each.emojiName}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  resultview = () => {
    const {clicklist} = this.state
    return (
      <div className="gameviewContainer">
        <nav className="nav-container">
          <div className="nav-content">
            <div className="emoji-display-container">
              <img
                src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720500672/wink_1emojinav_hkmab2.png"
                alt="emoji logo"
                className="emojilogo"
              />
              <p className="emojidescription">Emoji Game</p>
            </div>
          </div>
        </nav>
        <div className="result-content-container">
          <img src={isWinImageUrl} alt={altval} className="resultimage" />
          <div className="scorongcon">
            <h1 className="winorloose">{wonorloose}</h1>
            <p className="bestscore">Score</p>
            <p className="score">{clicklist.length}/12</p>
            <button
              type="button"
              className="playagin"
              onClick={this.onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  renderBasedONfunction = () => {
    const {isstart, iswon} = this.state
    if (isstart) {
      if (iswon) {
        return this.resultview()
      }
      return this.renderStartGameView()
    }
    return this.renderRulesView()
  }

  render() {
    return <div>{this.renderBasedONfunction()}</div>
  }
}
export default EmojiGame
