import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
import './App.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/portfoli0" element={<Navigate replace to="/" />} />
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
