import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, b) => (
        <span key={char + b} className={`${letterClass} _${b + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
