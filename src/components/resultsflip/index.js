const Resultsflip = props => {
  const {playAgainFlip, flipCount} = props

  const playAgainRes = () => {
    playAgainFlip()
  }
  return (
    <div className="flipresult-con">
      <img
        src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1721641876/03_Optimistic_nfmhhm.png"
        alt="grinning face with big eyes"
        className="timeupimg"
      />
      <h1 className="reasult-hed">Congratulations</h1>
      <p className="noflip-para">No.of Flips - {flipCount} </p>
      <h1 className="didnotmatch-para">
        You matched all of the cards in record time
      </h1>
      <button type="button" className="startagin-flip" onClick={playAgainRes}>
        Play Again
      </button>
    </div>
  )
}
export default Resultsflip
