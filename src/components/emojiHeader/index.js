import './index.css'

const EmojiHeader = props => {
  const {score} = props
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="emoji-display-container">
          <img
            src="https://res.cloudinary.com/dgkcumi4q/image/upload/v1720500672/wink_1emojinav_hkmab2.png"
            alt="emoji logo"
            className="emojilogo"
          />
          <p className="emojidescription">Emoji Game</p>
        </div>
        <p className="score-para">Score: {score}</p>
      </div>
    </nav>
  )
}
export default EmojiHeader
