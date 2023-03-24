import styles from '../App.module.css'

function ShowUser(props) {
    const { user , repos } = props;
    const { triggerChange } = props;
    
    function handelClick(e) {
        e.preventDefault();
        triggerChange();
    }
    
    return <>
        <div className={styles.user}>
            <div className={styles.userWraper}>
                <img className={styles.userImage} alt="Profile img" src={user.avatar}/>
                <h1 className={styles.userTitle}>{user.name}</h1>
            </div>
            <div className={styles.repoWraper}>
                <li className={styles.repoBio}><span>BIO:</span> {user.bio}</li> 
                <li className={styles.repoLocation}><span>LOCATION:</span> {user.location}</li> 
                <li className={styles.repoTitle}><span>REPOSITORIES:</span></li> 
            </div>
            {
                repos.map((repo) => {
                    return <li className={styles.repoItem}> {repo} </li>
                })
            }
            <button onClick={handelClick} >RESET!</button>
        </div>
    </>
}

export default ShowUser;