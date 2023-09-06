import styles from '@/styles/components/bars/progressModules.module.css'

type Props = {
    progressDivision: number[],
    progress: number
}

export const ProgressModules = ({progressDivision, progress}: Props)=>{
    const progressPercent = progress * 100;
    return (
        <div className={styles.progress}>
            <div className={styles.progressBar} style={{width: `${progressPercent}%`}}>{progressPercent}%</div>
            {progressDivision.map((el)=>(
                <div className={styles.progressBarDiv} style={{width: `${el * 100}%`}}></div>
            ))}
        </div>
    )
}