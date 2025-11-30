import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { TicTacToe } from './pages/TicTacToe'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tictactoe' element={<TicTacToe/>}/>
      </Routes>

      <ToastContainer/>
    </>
  )
}

export default App
