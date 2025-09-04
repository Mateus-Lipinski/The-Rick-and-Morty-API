import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import RickAndMorty from './pages/RickAndMorty'
import Home from './pages/Home'

// const mock = []

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rick-and-morty' element={<RickAndMorty/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
