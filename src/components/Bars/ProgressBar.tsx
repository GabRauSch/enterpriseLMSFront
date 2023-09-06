import styles from "@/styles/components/bars/progressBar.module.css";

type Props = {
    level: number,
    points: number,
    remainingPoints: number
}

export const ProgressBar = ({level, points, remainingPoints}: Props)=>{
    // bussiness setting below: I hate to comment, but I cannot acces my backend now. This rule is supposed to be in the backend
    const remainingPointsTEMP = level * level * 1000
    const progressWidth = remainingPoints/points * 100
    return (
        <>
            <h2>Level: {level} ({remainingPoints} points to next level)</h2>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{width: `${progressWidth}%`}}>
                    <div className={styles.currentProgrees} style={{marginLeft: "10px"}}></div>
                </div>
                <div className={styles.remainingPoints}></div>
            </div>
        </>
    )
}