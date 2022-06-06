import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoogle, faReadme } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faAddressBook,
  faEnvelope,
  faSeedling,
  faMobilePhone,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHeart} color="E8B4B8" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faAddressBook} color="E8B4B8" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faSeedling} color="E8B4B8" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="E8B4B8" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/bonniejeanreed/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#E8B4B8" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bonniereed"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#E8B4B8" />
            </a>
          </li>
          <li>
            <a
              href="mailto:bonniejeanreed@gmail.com" target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} color="#E8B4B8" />
            </a>
          </li>
          <li>
            <a
              href="tel:4694181554" target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMobilePhone} color="#E8B4B8" />
            </a>
          </li>

          <li>
            <a
              href="https://docs.google.com/document/d/1ipSups574eLRsTZskhVygpiUtWBXSQiZ/" target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faReadme} color="#E8B4B8" />
            </a>
          </li>



        </ul>
      </div>
    </>
  )
}

export default Sidebar
