import styles from '../styles/home.module.css'

export const SegmentArea = ()=>{
    return (
        <div className={styles.area}>
            <span className={styles.areaIcon}>&#128187;</span>
            <span className={styles.areaText}>Information Technology</span>
        </div>
    )
}