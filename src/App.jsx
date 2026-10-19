import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import SudentCart from './SudentCart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SudentCart></SudentCart>    
    </>
  )
}

export default App
