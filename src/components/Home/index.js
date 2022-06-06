import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ' Bonnie'.split('')
  const jobArray = 'Web Developer'.split('')
  const interestArray = 'Tech consultant'.split('')
  const enthusiastArray = 'Creative client solutions'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <><Logo />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={25}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={enthusiastArray}
              idx={25}
            />
          </h1>
          <h2>
            Full Stack Developer / Creative client solutions / Avid Learner
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="ball-zig-zag" />
    </>
  )
}

export default Home
