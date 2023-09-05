import styles from '@/styles/infoAreaButton.module.css'

type Props = {
    name: string
}

export const InfoAreaButton = ({name}: Props)=>{
    return (
        <button className={styles.buttonOption}>{name}</button>
    )
}