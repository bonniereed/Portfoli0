import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <span className="tags bottom-tags">
          <div id="circles"></div>
          <div id="circles2"></div>
          <div id="circles3"></div>
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout
