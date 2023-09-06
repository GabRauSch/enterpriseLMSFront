import styles from '@/styles/components/panels/squareInfo.module.css'

type Props = {
    title: string,
    data: string
}

export const SquareInfo = ({title, data}: Props)=>{
    return (
        <div className={styles.squareInfo}>
            <div className={styles.squareInfoTitle}>{title}</div>
            <div className={styles.squareInfoData}>{data}</div>
        </div>
    )
}