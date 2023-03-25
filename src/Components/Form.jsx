import React from 'react';
import styles from '../App.module.css'
import ShowUser from './ShowUser';

//redux
import { useSelector , useDispatch } from 'react-redux';
//redux
import { setUserInput, toggle , setUrl , setRepoUrl , setUserData , setUserRepos} from './formSlice';


function Form() {
  
  //redux
    const dispatch = useDispatch();
  //redux
    const trigger = useSelector((state) => state.form.trigger);
    const userurl = useSelector((state) => state.form.userUrl);
    const reposUrl = useSelector((state) => state.form.reposUrl);
    const userData = useSelector((state) => state.form.userData);
    const userRepos = useSelector((state) => state.form.userRepos);
    const userInput = useSelector((state) => state.form.userInput);


  //API CALLs
    React.useEffect( () => {

      async function fetchData() {
        await fetch(userurl)
          .then((res) => res.json())
          .then((data) => {   
            let userData = {
              name: data.name, 
              avatar: data.avatar_url,
              bio: data.bio,
              location: data.location
            }
            //redux
            dispatch(setUserData(userData));
        });

        await fetch(reposUrl)
          .then((res) => res.json())
          .then((data) => { 
            const repoNames = data.map((item) => {
              return item.name;
            }) 
            //redux
            dispatch(setUserRepos(repoNames));
        });
      };

      fetchData(); 

    }, [userurl]);

  //SHOW FORM vs USER 
    function triggerChange() {
      //redux
      dispatch(toggle());
    };

  //SHOW USER AND TRACK URLs
    function handelClick() { 
      //URLs
        let _URL_USER = `https://api.github.com/users/${userInput}`;
        let  _URL_REPOS = `https://api.github.com/users/${userInput}/repos`;

        //redux
        dispatch(setUrl(_URL_USER));
        dispatch(setRepoUrl(_URL_REPOS))

      //SHOW USER
         triggerChange();
    };

  //TRACK WHAT USER TYPING  
    function handelChange(e) { 
      let userInput = e.target.value;
      //redux
      dispatch(setUserInput(userInput));
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
        <ShowUser user={userData} repos={userRepos} triggerChange={triggerChange} />
      )
    }
  </>
}

export default Form;