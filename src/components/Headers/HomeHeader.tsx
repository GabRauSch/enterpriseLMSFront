import styles from '@/styles/homeHeader.module.css'

type Props = {
    companyName: string,
    profilePhoto: string
}

export const HomeHeader = ({companyName, profilePhoto}: Props)=>{
    return (
        <></>
        // <header className={styles.userHeader}>
        //     {/* <div className={styles.companyName}>
        //         {companyName}
        //     </div>
        //     <div className={styles.userProfile}>
        //         <img src={profilePhoto} alt="User Profile" />
        //     </div> */}
        // </header>
    )
}