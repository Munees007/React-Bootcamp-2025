import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './pages/TicTacToe'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTacToe/>
      <ToastContainer/>
    </>
  )
}

export default App
