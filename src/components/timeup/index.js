import './index.css'

const TimeUpNext = props => {
  const {playAgainFlip, flipCount} = props

  const playAgainOnClick = () => {
    playAgainFlip()
  }
  return (
    <div className="flipresult-con">
      <img
        src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1721641194/05_Pokerface_qzkp3d.png"
        alt="neutral face"
        className="timeupimg"
      />
      <h2 className="reasult-hed">Better luck next time</h2>
      <p className="noflip-para">No.of Flips - {flipCount}</p>
      <h1 className="didnotmatch-para">
        You did not match all of the cards in record time
      </h1>
      <button
        type="button"
        className="startagin-flip"
        onClick={playAgainOnClick}
      >
        Play Again
      </button>
    </div>
  )
}
export default TimeUpNext
