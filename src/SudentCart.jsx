
import './st.css'



function SudentCart(props) {
    return  (
    <div id='bloc1' >
     <img src={props.image} alt="" />
      <h1 >Ficher Etudient</h1>
      <p>Nom & Prenom: {props.np}</p>
      <p>MAIL  {props.email}</p>
      <p>TELEPHONE {props.tel}</p>
      <p>FILIERE {props.fil}</p>
      <p>ANNEE D'ETUDIER {props.anner}</p>
      <p>GROUPE {props.groupe}</p>
      <p>VILLE {props.ville}</p>
   
      <button  >CONTACTER</button>
      
    </div>);
    
}
export default SudentCart;