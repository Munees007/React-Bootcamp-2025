import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NumberGuessGame } from './pages/NumberGuessGame'
import { ToastContainer } from 'react-toastify'
import { WordScrambleGame } from './pages/WordScrambleGame'

function App() {

  return (
    <div>
      <NumberGuessGame/>
      <WordScrambleGame/>
      <ToastContainer/>
    </div>
  )
}

export default App
