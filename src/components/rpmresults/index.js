import './index.css'

const RockPaperResult = props => {
  const {newobj, playAgainRockPaper} = props
  const {
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
  } = newobj

  const onClickPlayingRock = () => {
    playAgainRockPaper()
  }

  return (
    <div className="main2-con" id="gapcon">
      <h1 className="h1hed" id="h1hedid">
        ROCK PAPER SCISSOR
      </h1>
      <div className="inner-main-con">
        <div className="results-con">
          <div className="r-p-s-con">
            <p className="r-p-s-des">Rock</p>
            <p className="r-p-s-des">Paper</p>
            <p className="r-p-s-des">Scissor</p>
          </div>
          <img src={displyimg} className="wonimg" alt={altdisimg} />
          <div className="displayscorecon">
            <p className="score-de">Score</p>
            <p className="score-dis">{scorerps}</p>
          </div>
        </div>
        <div className="rockandpapercon">
          <p className="r-p-s-des">You</p>
          <p className="r-p-s-des">Opponent</p>
        </div>
        <div className="display-main">
          <img src={userimg} className="imgrps-res" alt={userchoice} />
          <div className="display-iiner">
            <img src={smallimg} className="starimg" alt={altofresult} />
            <p className="r-p-s-des-a">{rpswonorloose}</p>
            <button
              type="button"
              className="palyagain"
              onClick={onClickPlayingRock}
            >
              Play Again
            </button>
          </div>
          <img src={ooponentimg} className="imgrps-res" alt={opponentchoice} />
        </div>
      </div>
    </div>
  )
}
export default RockPaperResult
