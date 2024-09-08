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
    stage: 1,
    totallevel: 15,
    currentlevel: 1,
  }

  componentDidMount() {
    this.getrandommatrix()
    this.timeoutfunc()
  }

  getrandommatrix = () => {
    const {size} = this.state
    const gridSize = size * size
    const newarr = Array.from({length: gridSize}, (_, index) => index)
    for (let i = newarr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newarr[i], newarr[j]] = [newarr[j], newarr[i]]
    }
    this.setState({heighltedboxes: newarr.slice(0, size)})
  }

  inComponentPlayagain = () => {
    this.setState(
      {
        selectedboxes: [],
        heighltedboxes: [],
        isclikable: false,
        isgameover: false,
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
    this.setState({isclikable: true})
  }

  colorsfunction = id => {
    const {heighltedboxes} = this.state
    return heighltedboxes.includes(id) ? 'heighletedstyle' : ''
  }

  onClickSelectFunc = id => {
    const {heighltedboxes, selectedboxes, totallevel} = this.state
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
              sizeofprogress: (prevState.stage + 1 / totallevel) * 100,
              stage: prevState.stage + 1,
              currentlevel: prevState.currentlevel + 1,
            }),
            () => {
              this.getrandommatrix()
              this.timeoutfunc()
            },
          )
        }
        if (!heighltedboxes.includes(id)) {
          this.setState(prevState => ({
            isgameover: true,
            sizeofprogress:
              prevState.stage === 1 ? 0 : (prevState.stage / totallevel) * 100,
            stage: prevState.stage - 1,
          }))
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
    console.log('heyy----grid')
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
          <div
            className={`cell ${
              isclikable
                ? this.anothercolorfunction(cell)
                : this.colorsfunction(cell)
            }`}
            aria-label="cellbutton"
            key={cell}
          >
            <button
              type="button"
              className="but"
              onClick={isclikable ? () => this.onClickSelectFunc(cell) : null}
              aria-label={`Select cell ${cell + 1}`}
              data-testid={
                heighltedboxes.includes(cell) ? 'highlighted' : 'notHighlighted'
              }
            />
          </div>
        ))}
      </div>
    )
  }

  renderStartFunc = () => {
    console.log('start----again')
    const {stage, currentlevel} = this.state
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
            <p className="level-hed">Level - {currentlevel}</p>
            <ul>
              <li key={1}>Level-{stage}</li>
              <li key={2}>score:0</li>
            </ul>
            {this.gridMatrix()}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isgameover, stage, sizeofprogress} = this.state
    return isgameover ? (
      <MatrixResult
        inComponentPlayagain={this.inComponentPlayagain}
        stage={stage}
        sizeofprogress={sizeofprogress}
      />
    ) : (
      this.renderStartFunc()
    )
  }
}

export default withRouter(StartMatrix)
