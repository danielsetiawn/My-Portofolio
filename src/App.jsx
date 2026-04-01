import { Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Works from './pages/Works'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/About' Component={About} />
        <Route path='/Works' Component={Works} />
        <Route path='/Contacts' Component={Contacts} />
      </Routes>
    </div>
  )
}

export default App