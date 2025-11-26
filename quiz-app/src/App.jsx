import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount()
  {
    setCount(count+1)
  }

  return (
    <>
      {count}
      <Greet name={"Munees"} increase={increaseCount}/>
    </>
  )
}

export default App
