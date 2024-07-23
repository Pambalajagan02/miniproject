import {Line} from 'rc-progress'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471542/apathy_a0xcmi.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471670/grimm_peu7ti.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471731/2xhappysmile_ht0jaw.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471811/2xhappyoptimal_ztnj2f.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721471882/2xhapigrin_wafyc7.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721472088/2xhappy_laugh_yewuva.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721474241/02_Happyhappihappy_lqtvgb.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://res.cloudinary.com/dgkcumi4q/image/upload/v1721474301/satisfaction_zy8ino.png',
  },
]

const levellist = [
  {id: 'l1', level: 'Level1'},
  {id: 'l2', level: 'Level2'},
  {id: 'l3', level: 'Level3'},
  {id: 'l4', level: 'Level4'},
  {id: 'l5', level: 'Level5'},
]

const MatrixResult = props => {
  const {sizeofprogress, stage, inComponentPlayagain} = props

  const matrixPlayAgain = () => {
    inComponentPlayagain()
  }

  return (
    <div className="resultmainmatrix">
      <div className="displaying-img-con">
        {emojisList.map(each => (
          <img src={each.emojiUrl} key={each.id} alt={each.emojiName} />
        ))}
      </div>
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
      <h1 className="congo">Congratulations!</h1>
      <p className="level-des">You have reached level {stage}</p>
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
