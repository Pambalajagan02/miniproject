import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import MatrixResult from '../MatrixResult'
import RulesOfMatrix from '../rulesOfMatrix'
import './index.css'

class StartMatrix extends Component {
  state = {
    size: 3,
    heighltedboxes: [],
    isclikable: false,
    selectedboxes: [],
    isgameover: false,
    sizeofprogress: 0,
    stage: 0,
  }

  componentDidMount() {
    this.getrandommatrix()
    this.timeoutfunc()
  }

  componentWillUnmount() {
    clearTimeout(this.timeid)
  }

  getrandommatrix = () => {
    const {size} = this.state
    const gridSize = size * size
    const newarr = Array.from({length: gridSize}, (_, index) => index)
    for (let i = newarr.length - 1; i > 0; i - 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newarr[i], newarr[j]] = [newarr[j], newarr[i]]
    }
    this.setState({heighltedboxes: newarr.slice(0, size)})
  }

  inComponentPlayagain = () => {
    this.setState(
      {
        isgameover: false,
        selectedboxes: [],
        heighltedboxes: [],
        isclikable: false,
      },
      () => {
        this.getrandommatrix()
        this.timeoutfunc()
      },
    )
  }

  onClickBackmatrixindif = () => {
    const {history} = this.props
    history.replace('/')
  }

  timeoutfunc = () => {
    this.timeid = setTimeout(this.tickfunction, 3000)
  }

  tickfunction = () => {
    this.setState({isclikable: true}, () => clearTimeout(this.timeid))
  }

  colorsfunction = id => {
    const {heighltedboxes} = this.state
    return heighltedboxes.includes(id) ? 'heighletedstyle' : ''
  }

  onClickSelectFunc = id => {
    const {heighltedboxes, selectedboxes} = this.state
    this.setState(
      prev => ({selectedboxes: [...prev.selectedboxes, id]}),
      () => {
        if (selectedboxes.length + 1 === heighltedboxes.length) {
          this.setState(
            prevState => ({
              size: prevState.size + 1,
              selectedboxes: [],
              heighltedboxes: [],
              isclikable: false,
              isgameover: false,
              sizeofprogress: prevState.sizeofprogress + 20,
              stage: prevState.stage + 1,
            }),
            () => {
              this.getrandommatrix()
              this.timeoutfunc()
            },
          )
        }
        if (!heighltedboxes.includes(id)) {
          setTimeout(() => {
            this.setState({isgameover: true})
          }, 500)
        }
      },
    )
  }

  anothercolorfunction = id => {
    const {selectedboxes, heighltedboxes} = this.state
    if (selectedboxes.includes(id)) {
      return heighltedboxes.includes(id) ? 'heighletedstyle' : 'red'
    }
    return ''
  }

  gridMatrix = () => {
    const {size, isclikable, heighltedboxes} = this.state
    const gridSize = size * size
    const cells = Array.from({length: gridSize}, (_, index) => index)
    const cellSize = 250 / size
    return (
      <div
        className="gridof"
        style={{
          gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
        }}
      >
        {cells.map(cell => (
          <button
            type="button"
            className={`cell ${
              isclikable
                ? this.anothercolorfunction(cell)
                : this.colorsfunction(cell)
            }`}
            key={cell}
            data-testid={
              heighltedboxes.includes(cell) ? 'highlighted' : 'notHighlighted'
            }
            aria-label="cellbutton"
            onClick={isclikable ? () => this.onClickSelectFunc(cell) : null}
          />
        ))}
      </div>
    )
  }

  renderStartFunc = () => {
    console.log('start----again')
    const {stage} = this.state
    return (
      <div className="main2-con" id="matrix-rule-con">
        <div className="inner-main-con">
          <div className="back-rules-button-container">
            <div className="back-container">
              <BiArrowBack className="iconstyle-rps" size={20} />
              <button
                type="button"
                className="backbutton-rps"
                onClick={this.onClickBackmatrixindif}
              >
                Back
              </button>
            </div>
            <RulesOfMatrix />
          </div>
          <h1 className="matrixhed">Memory Matrix</h1>
          <div className="matrix-game-con">
            <h1 className="level-hed">Level - {stage}</h1>
            {this.gridMatrix()}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isgameover, sizeofprogress, stage} = this.state
    return isgameover ? (
      <MatrixResult
        sizeofprogress={sizeofprogress}
        stage={stage}
        inComponentPlayagain={this.inComponentPlayagain}
      />
    ) : (
      this.renderStartFunc()
    )
  }
}

export default withRouter(StartMatrix)
