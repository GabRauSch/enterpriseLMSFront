import styles from "../styles/home.module.css";

export const HomeHeader = ()=>{
    return (
        <header className={styles.userHeader}>
            <div className={styles.companyName}>
                Intelbras
            </div>
            <div className={styles.userProfile}>
                {/* <img src="profile.jpg" alt="User Profile"> */}
            </div>
        </header>
    )
}