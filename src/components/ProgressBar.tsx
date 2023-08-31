import styles from "../styles/progressBar.module.css";

type Props = {
    level: number,
    points: number,
    remainingPoints: number
}

export const ProgressBar = ({level, points, remainingPoints}: Props)=>{
    const progressWidth = points/remainingPoints * 100
    return (
        <>
            <h2 style={{backgroundColor: "red"}}>Level: {level}</h2>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{width: `${progressWidth}%`, backgroundColor: "red"}}></div>
                <div className={styles.remainingPoints} style={{backgroundColor: "red"}}>{remainingPoints} points to next level</div>
            </div>
        </>
    )
}