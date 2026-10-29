import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import SudentCart from './SudentCart';
import Header1 from './header1';
import Navbar from './navbar';
//import SetEtudient from './SetEtudient';

import Footer from './footer';
import m from './assets/m.jpg'

function App() {
  function ajout_etuhdient(){
    const nvEtudient={
        np:"Nasr Salah",
        email:"slhnasr7777@gmail.com",
        tel:"telephone",
        fil:"Science Informatique",
        anne:"2026/2027",
        groupe:"GLSI_C",
        ville:"tunisie",
        image: m

    };
    setetudient([...etudient, nvEtudient])
}
  const [etudient, setetudient] = useState(
    [
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
]
  )

  return (
    <>
    
    <div className="hd">
      
      <Header1></Header1>  
      <button type="button" onClick={ajout_etuhdient}>Ajouter</button>
      </div>
      <div className="esb">
        <div className="nv">
          <Navbar>
            </Navbar>  
        </div>
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
