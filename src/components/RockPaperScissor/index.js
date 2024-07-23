import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import RockPaperRules from '../RockPaperRules'
import RockPaperResult from '../rpmresults'
import './index.css'

const rulesof = [
  {
    id: 1,
    rulename:
      'The game result should be based on user and user opponent choices',
  },
  {
    id: 2,
    rulename:
      'When the user choice is rock and his opponent choice is rock then the result will be IT IS DRAW',
  },
  {
    id: 3,
    rulename:
      'When the user choice is paper and his opponent choice is rock then the result will be YOU WON',
  },
  {
    id: 4,
    rulename:
      'When the user choice is a scissor and his opponent choice is rock then the result will be YOU LOSE',
  },
  {
    id: 5,
    rulename:
      'When the user choice is paper and his opponent choice is paper then the result will be IT IS DRAW',
  },
  {
    id: 6,
    rulename:
      'When the user choice is scissors and his opponent choice is paper then the result will be YOU WON',
  },
  {
    id: 7,
    rulename:
      'When the user choice is rock and his opponent choice is scissors then the result will be YOU WON',
  },
  {
    id: 8,
    rulename:
      'When the user choice is paper and his opponent choice is scissors then the result will be YOU LOSE',
  },
  {
    id: 9,
    rulename:
      'When the user choice is scissors and his opponent choice is scissors then the result will be IT IS DRAW',
  },
  {
    id: 10,
    rulename:
      'When the result is YOU WON, then the count of the score should be incremented by 1',
  },
  {
    id: 11,
    rulename:
      'When the result is IT IS DRAW, then the count of the score should be the same',
  },
  {
    id: 12,
    rulename:
      'When the result is YOU LOSE, then the count of the score should be decremented by 1.',
  },
]

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataid: 'rockButton',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataid: 'scissorButton',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataid: 'paperButton',
  },
]

let rpswonorloose = ''
let ooponentimg = ''
let userchoice = ''
let opponentchoice = ''
let userimg = ''
let displyimg = ''
let smallimg = ''
let altofresult = ''
let altdisimg = ''

class RockPaperScissor extends Component {
  state = {isrpsstart: false, isrpswon: false, scorerps: 0}

  onClickRockPaperScissor = () => {
    this.setState({isrpsstart: true})
  }

  onClickResults = id => {
    const {scorerps} = this.state
    const randomindex = Math.floor(Math.random() * choicesList.length)
    opponentchoice = choicesList[randomindex].id
    userchoice = id
    ooponentimg = choicesList[randomindex].imageUrl
    const findof = choicesList.find(each => each.id === id)
    userimg = findof.imageUrl

    if (opponentchoice === userchoice) {
      rpswonorloose = 'IT IS DRAW'
      altdisimg = 'draw emoji'
      displyimg =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720939953/losedis_bgsty3.jpg'
      smallimg =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720941722/Emojidrawsmall_gzlfiz.png'
      altofresult = 'Face without mouth '
    } else if (
      (userchoice === 'paper' && opponentchoice === 'rock') ||
      (userchoice === 'scissor' && opponentchoice === 'paper') ||
      (userchoice === 'rock' && opponentchoice === 'scissor')
    ) {
      rpswonorloose = 'YOU WON'
      altdisimg = 'won emoji'
      displyimg =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720939630/Designer_kynmpt.png'
      smallimg =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720942288/Emojiwinsmall_q1gkn5.png'
      altofresult = 'Smiling face with star eyes'
      this.setState(prev => ({scorerps: prev.scorerps + 1}))
    } else {
      rpswonorloose = 'YOU LOSE'
      altdisimg = 'lose emoji'
      displyimg =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720940154/draw_j8s1tl.jpg'
      smallimg =
        'https://res.cloudinary.com/dgkcumi4q/image/upload/v1720942205/Emojiloosesmall_ibshs7.png'
      altofresult = 'Frowning face'

      if (scorerps > 0) {
        this.setState(prev => ({scorerps: prev.scorerps - 1}))
      }
    }

    this.setState({isrpswon: true})
  }

  onClickBackRock = () => {
    const {history} = this.props
    history.replace('/')
  }

  playAgainRockPaper = () => {
    this.setState({isrpswon: false})
  }

  renderRockPaperScissorGame = () => {
    const {isrpsstart, isrpswon} = this.state
    if (isrpsstart) {
      if (isrpswon) {
        return this.resultsViewOfRps()
      }
      return this.startPlayingRockPaperScissor()
    }
    return this.rulesOfRockPaperScissor()
  }

  resultsViewOfRps = () => {
    const {scorerps} = this.state
    return (
      <RockPaperResult
        newobj={{
          rpswonorloose,
          ooponentimg,
          scorerps,
          opponentchoice,
          userchoice,
          userimg,
          displyimg,
          smallimg,
          altofresult,
          altdisimg,
        }}
        playAgainRockPaper={this.playAgainRockPaper}
      />
    )
  }

  startPlayingRockPaperScissor = () => (
    <div className="main2-con">
      <div className="inner-main-con">
        <div className="back-rules-button-container">
          <div className="back-container">
            <BiArrowBack className="iconstyle-rps" size={20} />
            <button
              type="button"
              className="backbutton-rps"
              onClick={this.onClickBackRock}
            >
              Back
            </button>
          </div>
          <RockPaperRules />
        </div>
        <h1 className="h1hed">ROCK PAPER SCISSOR</h1>
        <div id="divcon">
          <h2 className="h2hed">Let’s pick</h2>
          <div className="game-conainer">
            {choicesList.map(each => (
              <button
                className="buttonof"
                type="button"
                key={each.id}
                data-testid={each.dataid}
                onClick={() => this.onClickResults(each.id)}
              >
                <img src={each.imageUrl} alt={each.id} className="imgrps" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  rulesOfRockPaperScissor = () => (
    <div className="rock-paper-Main">
      <div className="inner-main-con">
        <div className="back-container-rps">
          <BiArrowBack className="iconstyle-rps" size={20} />
          <button
            type="button"
            className="backbutton-rps"
            onClick={this.onClickBackRock}
          >
            Back
          </button>
        </div>
        <h1 className="main-heading">ROCK PAPER SCISSOR</h1>
        <img
          src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720763416/Group_7469rpsrule_ir4pwc.png"
          className="img_rule"
          alt=" rock paper scissor"
        />
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
          onClick={this.onClickRockPaperScissor}
        >
          Start Playing
        </button>
      </div>
    </div>
  )

  render() {
    return <div>{this.renderRockPaperScissorGame()}</div>
  }
}
export default RockPaperScissor
