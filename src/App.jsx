import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import SudentCart from './SudentCart';
import Header1 from './header1';
import Navbar from './navbar';

import Footer from './footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hd">
      <Header1></Header1>  
      </div>
      <div className="esb">
        <Navbar></Navbar>  
        <SudentCart></SudentCart>  
          
       </div>
       <div className="ft">
        <Footer></Footer>  
        </div> 
    </>
  )
}

export default App
