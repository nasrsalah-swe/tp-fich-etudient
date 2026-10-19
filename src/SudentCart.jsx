
import './App.css'
const etudient={
  np:"Nasr Salah",
  email:"slhnasr7@gmail.com",
  tel:"telephone",
  fil:"Science Informatique",
  anne:"2026/2027",
  groupe:"GLSI_C",
  ville:"tunisie"
}


function SudentCart() {
    return  (
    <div id='bloc1' >
      <img src="/m.jpg" alt="photo" />
      <h1 >Ficher Etudient</h1>
      <p>Nom & Prenom {etudient.np}</p>
      <p>MAIL {etudient.email}</p>
      <p>TELEPHONE {etudient.tel}</p>
      <p>FILIERE {etudient.fil}</p>
      <p>ANNEE D'ETUDIER {etudient.anne}</p>
      <p>GROUPE {etudient.groupe}</p>
      <p>VILLE {etudient.ville}</p>
   
      <button  >CONTACTER</button>
      
    </div>);
    
}
export default SudentCart;