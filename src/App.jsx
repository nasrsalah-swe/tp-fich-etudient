import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import SudentCart from './SudentCart';
import Header1 from './header1';
import Navbar from './navbar';

import Footer from './footer';
import m from './assets/m.jpg'

const etudient=[
  {
  np:"Nasr Salah",
  email:"slhnasr7@gmail.com",
  tel:"telephone",
  fil:"Science Informatique",
  anne:"2026/2027",
  groupe:"GLSI_C",
  ville:"tunisie",
  image: m
},
{
  np:"salhi omar",
  email:"slhnasr88@gmail.com",
  tel:"telephone",
  fil:"Science Informatique",
  anne:"2026/2027",
  groupe:"GLSI_C",
  ville:"tunisie",
  image: m
},
{
  np:"Nasr ",
  email:"slhnasr7777@gmail.com",
  tel:"telephone",
  fil:"Science Informatique",
  anne:"2026/2027",
  groupe:"GLSI_C",
  ville:"tunisie",
  image: m
}
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hd">
      <Header1></Header1>  
      </div>
      <div className="esb">
        <Navbar></Navbar>  
        <div className="sc">
          {
          etudient.map((e)=>( 
          <SudentCart 
        image={e.image}
          np ={e.np}
          email ={e.email}
          tel ={e.tel}
          fil ={e.fil}
          anner={e.anne}
          groupe ={e.groupe}
          ville ={e.ville}
          key={e.email}
          />))
        }
        </div>
          
        
          
       </div>
       <div className="ft">
        <Footer></Footer>  
        </div> 
    </>
  )
}

export default App
