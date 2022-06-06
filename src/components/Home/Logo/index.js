/* eslint-disable no-unused-vars */
import { useRef } from 'react'
import LogoB from '../../../assets/images/IMG_8767.png'
import './index.scss'

const styles = {
  self: {
    maxHeight: '50%',
    marginTop: '5px',
    marginBottom: '5px',
    padding: '5px',
    borderRadius: '10px',
  },
}

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="git-container" ref={bgRef}>
      <img style={styles.self}
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoB}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
