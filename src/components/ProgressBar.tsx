
import styles from "../styles/home.module.css";

type Props = {
    level: number,
    points: number,
    remainingPoints: number
}

export const ProgressBar = ({level, points, remainingPoints}: Props)=>{
    const progressWidth = points/remainingPoints * 100
    return (
        <>
            <h2>Level: {level}</h2>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{width: `${progressWidth}%`}}></div>
                <div className={styles.remainingPoints}>{remainingPoints} points to next level</div>
            </div>
        </>
    )
}