import './index.css'

const TimeUpNext = props => {
  const {playAgainFlip} = props

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
      <h1 className="reasult-hed">Better luck next time!</h1>
      <p className="noflip-para">No.of Flips - 20</p>
      <p className="didnotmatch-para">
        You did not match all of the cards in record time
      </p>
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
