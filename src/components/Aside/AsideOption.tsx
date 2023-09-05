import { useRouter } from 'next/router'
import styles from '@/styles/asideOption.module.css'
type Props = {
    name: string,
    active: boolean,
    symbol: string
}

export const AsideOption = ({name, active, symbol}: Props)=>{
    const router = useRouter();
    const link = name.toLowerCase();
    const handleLink = ()=>{  
        console.log(link)  
        router.push(`/${link}`)
    }
    return (
        <li onClick={()=>{handleLink()}} className={styles.navLink} id={active ? styles.active : styles.unactive}>
            <a>
                {name}
            </a>
        </li>
    )
}