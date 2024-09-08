import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'

import StartMatrix from '../StartMtarix'
import './index.css'

const rulesof = [
  {
    id: 1,
    rulename:
      'In each level of the Game, Users should be able to see the Grid with (N X N) size starting from 3 and the grid will highlight N cells in Blue, the N highlighted cells will be picked randomly.',
  },
  {
    id: 2,
    rulename:
      'The highlighted cells will remain N seconds for the user to memorize the cells. At this point, the user should not be able to perform any action.',
  },
  {
    id: 3,
    rulename: 'After N seconds, the grid will clear the N highlighted cells.',
  },
  {
    id: 4,
    rulename:
      'At N seconds, the user can click on any cell. Clicking on a cell that was highlighted before it will turn blue. Clicking on the other cells that were not highlighted before then will turn to red.',
  },
  {
    id: 5,
    rulename:
      'The user should be promoted to the next level if they guess all N cells correctly in one attempt.',
  },
  {
    id: 6,
    rulename:
      'The user should be taken to the results page if the user clicks on the wrong cell.',
  },
  {
    id: 7,
    rulename:
      'If the user completed all the levels, then the user should be taken to the results page.',
  },
]

class MemoryMatrix extends Component {
  state = {
    matrixisstart: false,
  }

  onClickMatrixStart = () => {
    this.setState({matrixisstart: true})
  }

  onClickBackmatrix = () => {
    const {history} = this.props
    history.replace('/')
  }

  matrixRules = () => (
    <div className="rock-paper-Main" id="matrix-rule-con">
      <div className="inner-main-con">
        <div className="back-container-rps">
          <BiArrowBack className="iconstyle-rps" size={20} />
          <button
            type="button"
            className="backbutton-rps"
            onClick={this.onClickBackmatrix}
          >
            Back
          </button>
        </div>
        <h1 className="main-heading">Memory Matrix</h1>
        <img
          src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1721012813/memoryrulematrix_ch4hng.png"
          className="img_rule"
          alt="memory matrix"
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
          id="buttonstartplay"
          onClick={this.onClickMatrixStart}
        >
          Start Playing
        </button>
      </div>
    </div>
  )

  renderBasedonfunction = () => {
    const {matrixisstart} = this.state
    if (matrixisstart) {
      return <StartMatrix />
    }
    return this.matrixRules()
  }

  render() {
    return this.renderBasedonfunction()
  }
}

export default MemoryMatrix
