import styles from '@/styles/sectionContent.module.css'

type Props = {
    watched: boolean,
    title: string,
    duration: number
}

export const SectionContent = ({watched, title, duration}: Props)=>{
    return (
        <div className={styles.sectionContent}>
            <div className={styles.sectionCheck}><input type="checkbox" /></div>
            <div className={styles.sectionContentInformation}>
                <h3>{title}</h3>
                <div className={styles.sectionInformationDuration}>{duration} min</div>
            </div>
        </div>
    )
}