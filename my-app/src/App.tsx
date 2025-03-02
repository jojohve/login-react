import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Main } from './pages/main-page'
import { Login } from './pages/login'
import { Navbar } from './components/navbar'
import { About } from './pages/about'

function App() {
  return (
    <>
      <div className="App">
        <Router>
        <h1 className='titolo'>Login App</h1>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Main />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App