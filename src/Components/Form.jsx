import styles from '../App.module.css'

function Form(props) {
  const { triggerChange } = props;
  function handelClick(e) {
    e.preventDefault();
    triggerChange();
  }


    return <>
     <form className={styles.form}>
        <label className={styles.try} for="userInput" >gitHub username </label>
        <input id="userInput" type="text" placeholder='try type facebook'/>
        <button onClick={handelClick} >GO!</button>
      </form>
    </>
}

export default Form;

