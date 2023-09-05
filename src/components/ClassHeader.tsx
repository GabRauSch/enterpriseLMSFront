import styles from '@/styles/classHeader.module.css'

type Props = {
    companyName: string,
    classTitle: string
}

export const ClassHeader = ({companyName, classTitle}: Props)=>{
    return (
        <header className={styles.header}>
            <div className={styles.logo}>{companyName}</div>
            <div className={styles.container}>
                <a>{classTitle}</a>
            </div>
            <div className={styles.options}>
                <img src="/dots.png" alt="options" width="20px"/>
            </div>
        </header>
    )
}