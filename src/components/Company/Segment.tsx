import styles from '@/styles/components/company/segment.module.css';
type Props = {
    icon: string,
    segmentName: string
}

export const Segment = ({icon, segmentName}: Props)=>{
    return (
        <div className={styles.area}>
            <span className={styles.areaIcon}>{icon}</span>
            <span className={styles.areaText}>{segmentName}</span>
        </div>
    )

}