import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const handleClick = (key: string) => {
      console.log(key+" Choisi !")
  }

  return (
    <div className='container'>
      <div className='container-game'>
        <div className='btnJeu' id='red' onClick={() => handleClick("red")}></div>
        <div className='btnJeu' id='blue' onClick={() => handleClick("blue")}></div>
        <div className='btnJeu' id='green' onClick={() => handleClick("green")}></div>
        <div className='btnJeu' id='yellow' onClick={() => handleClick("yellow")}></div>
      </div>
      <button id='btnStart'>START</button>
    </div>
  )
}

export default App
