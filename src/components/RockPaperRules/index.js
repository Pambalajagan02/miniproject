import {Component} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import './index.css'

Modal.setAppElement('#root')

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

class RockPaperRules extends Component {
  state = {showModal: false}

  constructor() {
    super()
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({showModal: true})
  }

  handleCloseModal() {
    this.setState({showModal: false})
  }

  render() {
    const {showModal} = this.state
    return (
      <div>
        <button
          type="button"
          onClick={this.handleOpenModal}
          className="rulesbutton-rps"
        >
          Rules
        </button>
        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modalrps"
          overlayClassName="Overlay"
        >
          <div className="model-containerrps">
            <button
              type="button"
              onClick={this.handleCloseModal}
              className="closebutton"
              data-testid="close"
            >
              <CgClose size={20} className="iconstyle" />
            </button>
            <h1 className="rulesheds">Rules</h1>

            <ul className="rulesulrps">
              {rulesof.map(each => (
                <li key={each.id} className="rulelists">
                  {each.rulename}
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}
export default RockPaperRules
