import styles from '../styles/asideOption.module.css'
type Props = {
    name: string,
    active: boolean,
    symbol: string
}

export const AsideOption = ({name, active, symbol}: Props)=>{
    const link = name.toLowerCase()
    return (
        <li>
            <a href={link} className={styles.navLink} id={active ? styles.active : styles.unactive}>
                {name}
            </a>
        </li>
    )
}