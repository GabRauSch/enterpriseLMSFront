import styles from '@/styles/components/course/sectionModule.module.css'
import { SectionContent } from './SectionContent'

type Props = {
    sectionTitle: string,
    videoCount: number,
    totalVideos: number
}

export const SectionModule = ({sectionTitle, videoCount, totalVideos}: Props)=>{
    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionInfo}>
                    <h3>{sectionTitle}</h3>
                    <p>{videoCount}/{totalVideos}</p>
                </div>
                <div className={styles.sectionButton}>
                    <img src="/down-arrow.png" alt="down-arrow" width="10px" />
                </div>
            </div>
            <SectionContent watched={true} title="1. Grande video" duration={3}/>
            <SectionContent watched={true} title="2. Leulis penilos" duration={3}/>
        </div>
    )
}