import styles from '../App.module.css'

function ShowUser(props) {

    const { triggerChange } = props;
    function handelClick(e) {
        e.preventDefault();
        triggerChange();
    }
    return <>
        <div className={styles.user}>
            <div className={styles.userWraper}>
                <img className={styles.userImage} alt="Profile img" src='https://img.etimg.com/thumb/msid-59337222,width-650,height-488,imgsize-157812,,resizemode-75/.jpg'/>
                <h1 className={styles.userTitle}>Redux</h1>
            </div>

            <div className={styles.repoWraper}>
                <li className={styles.repoBio}><span>BIO:</span> Some text Some textSome textSome textSome text</li> 
                <li className={styles.repoLocation}><span>LOCATION:</span> Some textSome text</li> 
                <li className={styles.repoTitle}><span>REPOSITORIES:</span></li> 
            </div>

            <li className={styles.repoItem}>d3-state-visulation</li>
            <li className={styles.repoItem}>d3-state-visulation</li>
            <li className={styles.repoItem}>d3-state-visulation</li>
            <li className={styles.repoItem}>d3-state-visulation</li>

            <button onClick={handelClick} >RESET!</button>
        </div>
    </>
}

export default ShowUser;