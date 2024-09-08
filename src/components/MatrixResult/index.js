import {Line} from 'rc-progress'
import './index.css'

const emojisArray = [
  {
    id: 0,
    emojialt: 'neutral face',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471542/apathy_a0xcmi.png',
  },
  {
    id: 1,
    emojialt: 'grimacing face',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471670/grimm_peu7ti.png',
  },
  {
    id: 2,
    emojialt: 'slightly smiling face',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471731/2xhappysmile_ht0jaw.png',
  },
  {
    id: 3,
    emojialt: 'grinning face with big eyes',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471811/2xhappyoptimal_ztnj2f.png',
  },
  {
    id: 4,
    emojialt: 'grinning face with smiling eyes',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471882/2xhapigrin_wafyc7.png',
  },
  {
    id: 5,
    emojialt: 'beaming face with smiling eyes',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721472088/2xhappy_laugh_yewuva.png',
  },
  {
    id: 6,
    emojialt: 'grinning face',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721474241/02_Happyhappihappy_lqtvgb.png',
  },
  {
    id: 7,
    emojialt: 'smiling face with sunglasses',
    emojisUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721474301/satisfaction_zy8ino.png',
  },
]

const levellist = [
  {id: 'l1', level: 'Level 1'},
  {id: 'l2', level: 'Level 5'},
  {id: 'l3', level: 'Level 10'},
  {id: 'l4', level: 'Level 15'},
]

const MatrixResult = props => {
  const {sizeofprogress, stage, inComponentPlayagain} = props
  console.log(sizeofprogress)

  const matrixPlayAgain = () => {
    inComponentPlayagain()
  }

  return (
    <div className="resultmainmatrix">
      <ul className="displaying-img-con">
        {emojisArray.map(each => (
          <li key={each.id}>
            <img src={each.emojisUrl} alt={each.emojialt} />
          </li>
        ))}
      </ul>
      <Line
        percent={sizeofprogress}
        strokeWidth={2}
        strokeColor="#467AFF"
        className="styleLinePro"
      />
      <div className="displaying-img-con">
        {levellist.map(each => (
          <p key={each.id} className="level-des">
            {each.level}
          </p>
        ))}
      </div>
      <h1 className="congo">Congratulations</h1>
      <h1 className="level-des">You have reached level {stage}</h1>
      <button
        type="button"
        className="button-matrix-agian"
        onClick={matrixPlayAgain}
      >
        Play Again
      </button>
    </div>
  )
}
export default MatrixResult
