import {Component} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
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

Modal.setAppElement('#root')

class RulesViewEmoji extends Component {
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
          className="rulesbutton"
        >
          Rules
        </button>
        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
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
export default RulesViewEmoji
