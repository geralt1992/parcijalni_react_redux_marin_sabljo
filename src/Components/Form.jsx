import React from 'react';
import styles from '../App.module.css'
import ShowUser from './ShowUser';

function Form() {
  //STATEs
    const [userinput , setUserinput] = React.useState('');
    const [trigger, setTrigger] = React.useState(true);  
    const [us, setUs] = React.useState({});  
    const [rep, setRep] = React.useState([]);   

  //STATE - URLs
    const [userurl, setUserurl] = React.useState('');
    const [userrepos, setUserrepos] = React.useState('');

  //API CALLs
    React.useEffect( () => {
      async function fetchData() {
        const user = await fetch(userurl)
          .then((res) => res.json())
          .then((data) => {   
            let userData = {
              name: data.name, 
              avatar: data.avatar_url,
              bio: data.bio,
              location: data.location
            }
            setUs(userData);
        });

        const repos = await fetch(userrepos)
          .then((res) => res.json())
          .then((data) => { 
            const repoNames = data.map((item) => {
              return item.name;
            }) 
            setRep(repoNames); 
        });
      };

      fetchData(); 
    
    }, [userurl , userrepos]);

  //SHOW USER AND TRACK URLs
    function handelClick() { 
      //SHOW USER DATA
        triggerChange();

      //URLs
        let _URL_USER = `https://api.github.com/users/${userinput}`;
        let  _URL_REPOS = `https://api.github.com/users/${userinput}/repos`;

        setUserurl(_URL_USER);
        setUserrepos(_URL_REPOS);
    };

 //SHOW FORM vs USER 
    function triggerChange() {
      setTrigger(!trigger);
    };

  //TRACK WHAT USER TYPING  
    function handelChange(e) { 
      setUserinput(e.target.value);
    };

  return <>
    {
      trigger ? (
        <form className={styles.form}>
          <label className={styles.try} htmlFor="userInput" >gitHub username </label>
          <input onChange={handelChange} id="userInput" type="text" placeholder='try type facebook'/>
          <button onClick={handelClick}>GO!</button>
      </form>
      ) : (
        <ShowUser user={us} repos={rep} triggerChange={triggerChange} />
      )
    }
  </>
}

export default Form;