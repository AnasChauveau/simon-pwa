import { useMemo, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sequence, setSequence] = useState<number[]>([])
  const [start, setStart] = useState(false)
  const [timePlayer, setTimePlayer] = useState(false)
  const [click, setClick] = useState(0)

  const gameOver = useMemo(() => click === -1, [click])

  useEffect(() => {
    setTimePlayer(true)
    console.log(sequence)
  }, [sequence]);

  useEffect(() => {
    if (gameOver) {
      setSequence([])
      setStart(false)
      setClick(0)
      setTimePlayer(false)
    }
  }, [gameOver]);

  const startSequence = () => {
    let newSequence = sequence.slice()
    newSequence.push(Math.floor(Math.random() * 4) + 1);
    setSequence(newSequence)
    setClick(0)
    setStart(true)
  }

  const handleClick = (key: number) => {
    if(timePlayer === true){
      if(key == sequence[click]){
        if(click === sequence.length - 1){
          console.log('sequence Ok')
          setTimePlayer(false)
          startSequence()
        }
        else {
          console.log("ok on avance")
          setClick(click+1)
        }
      }
      else{
        console.log('erreur dans la sequence')
        setClick(-1)
      }
    }
  }

  return (
    <div className='container'>
      <div className='container-game'>
        <div className='btnJeu' id='red' onClick={() => handleClick(1)}></div>
        <div className='btnJeu' id='blue' onClick={() => handleClick(2)}></div>
        <div className='btnJeu' id='green' onClick={() => handleClick(3)}></div>
        <div className='btnJeu' id='yellow' onClick={() => handleClick(4)}></div>
      </div>
      {!start && <button id='btnStart' onClick={() => startSequence()}>START</button>}
    </div>
  )
}

export default App
