import { Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App