import React from 'react';
import styles from './App.module.css'
import { Form , ShowUser } from './Components';



function App() {

const [trigger, setTrigger] = React.useState(true);


function triggerChange() {
  let newTrigger = true;
  console.log(newTrigger);
  if(newTrigger == true) {
    newTrigger = false;
    setTrigger( newTrigger );
  } else {
    newTrigger = true;
    setTrigger(newTrigger);
  }
 

 
 
}


  return <>

    <div className={styles.main}>
      {
        trigger ? (
          <Form triggerChange={triggerChange} />
        ) : (
          <ShowUser triggerChange={triggerChange}/>
        )
      }
    </div>
  
  </>
}


//https://api.github.com/users/USERNAME - preko ovog dohvaćaš podatke
//ovo ime preko forme upisujemo label:gitHub username: + input -- tu upišeš ime usera i spaja se gore s ovim linkom
//nama treba 1avatar url, 2name, 3location, 4bio iz toga sto dobijemo
//to sve je prvi poziv


//drugi poziv, dohvacane repozitorija github usera
//https://api.github.com/users/USERNAME/repos
//dva api poziva, jedan iza drugog
//dohvatiti podatke github usera
//dobijes listu objekata, iterirati kroz listu i dohvatit imena reposa
//prikazati u listi  <li></li>

//dvije komp dovoljne

//BONUS redux

export default App;
