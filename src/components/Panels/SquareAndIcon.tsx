import styles from '@/styles/components/panels/squareAndIcon.module.css';

type Props ={
    title: string,
    iconUrl: string
}

export const SquareAndIcon = ({iconUrl, title}: Props) =>{
    return(
        <div className={styles.quadrado}>
            <div className={styles.nome}>{title}</div>
            <img src={`${iconUrl}`}  alt="icon" className={styles.image} />
        </div>
    )
}