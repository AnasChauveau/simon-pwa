import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='container-game'>
        <div className='btnJeu' id='red'></div>
        <div className='btnJeu' id='blue'></div>
        <div className='btnJeu' id='green'></div>
        <div className='btnJeu' id='yellow'></div>
      </div>
      <button id='btnStart'>START</button>
    </div>
  )
}

export default App
