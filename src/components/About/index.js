/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I currently work out of my home as a technical consultant. I am capable of assisting my clients with any hardware/ software issues. Experienced Systems Administrator with a demonstrated history of scripting and automating solutions for Mac and Windows support and reporting.
            Looking for the next step in my career towards a full time Software Engineer.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#E8B4B8" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#E8B4B8" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#E8B4B89" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#E8B4B8" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#E8B4B8" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#E8B4B8" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-zig-zag" />
    </>
  )
}

export default About
