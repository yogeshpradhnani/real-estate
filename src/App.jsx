import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Flow from './components/Flow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Home />
    <Footer />
    {/* <Flow /> */}

    </>
  )
}

export default App