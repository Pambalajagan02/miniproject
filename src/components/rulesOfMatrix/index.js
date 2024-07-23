import {Component} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
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

Modal.setAppElement('#root')

class RulesOfMatrix extends Component {
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
          id="matrixrul"
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
export default RulesOfMatrix
