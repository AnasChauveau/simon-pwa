import { useMemo, useState, useEffect } from 'react'
import './App.css'

const COLORS = ['red', 'blue', 'green', 'yellow']
const LIGHT_COLORS = ['pink', 'lightblue', 'yellowgreen', 'black']

function App() {
  const [sequence, setSequence] = useState<number[]>([])
  const [start, setStart] = useState(false)
  const [timePlayer, setTimePlayer] = useState(false)
  const [click, setClick] = useState(0)

  const gameOver = useMemo(() => click === -1, [click])

  console.log('state', {sequence, click, timePlayer, start})

  useEffect(() => {
    if (gameOver) {
      setSequence([])
      setStart(false)
      setClick(0)
      setTimePlayer(false)
    }
  }, [gameOver]);

  useEffect(() => {
    if(start && !timePlayer){
      if(click < sequence.length){
        setTimeout(() => {
          setClick(click + 1)
        }, 1000)
      }
      else {
        setClick(0)
        setTimePlayer(true)
      }
    }
  }, [sequence, timePlayer, click])

  const startSequence = () => {
    let newSequence = sequence.slice()
    newSequence.push(Math.floor(Math.random() * 4));
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
        {COLORS.map((color, colorIndex) => (
          <div
            key={colorIndex}
            style={{backgroundColor: (!timePlayer && colorIndex === sequence[click]) ? LIGHT_COLORS[colorIndex] : color}}
            className='btnJeu'
            id={color}
            onClick={() => handleClick(colorIndex)}
          />
        ))}
      </div>
      {!start && <button id='btnStart' onClick={() => startSequence()}>START</button>}
    </div>
  )
}

export default App
