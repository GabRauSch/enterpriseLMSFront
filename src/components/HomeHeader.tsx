import styles from '../styles/homeHeader.module.css'

type Props = {
    companyName: string
}

export const HomeHeader = ({companyName}: Props)=>{
    return (
        <header className={styles.userHeader}>
            <div className={styles.companyName}>
                {companyName}
            </div>
            <div className={styles.userProfile} style={{backgroundColor: "red"}}>
                <img src="/profile.jpg" alt="User Profile" />
            </div>
        </header>
    )
}