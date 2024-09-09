import {Component} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
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

class FlipRules extends Component {
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
          className="Modal"
          id="fliprule"
          overlayClassName="Overlay"
        >
          <div className="model-container">
            <button
              type="button"
              onClick={this.handleCloseModal}
              className="closebutton"
              data-testid="close"
            >
              <CgClose size={20} className="iconstyle" />
            </button>
            <h1 className="rulesheds">Rules</h1>

            <ul className="rulesul">
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
export default FlipRules
