import styles from '@/styles/panelBlock.module.css'

type Props = {
    icon: string
    name: string,
    data: string,
    action: string,
    clicked: string
}

export const PanelBlock  = ({icon, name, data,action, clicked}: Props)=>{
    return (
        <div className={styles.panelBlock}>
            <div className={styles.infoArea}>
                <div className={styles.iconArea}>
                    {icon}
                </div>
                <div className={styles.dataArea}>
                    <div className={styles.name}>
                        {name} 
                    </div>
                    <div className={styles.data}>
                        {data}
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <a href={clicked}>{action}</a>
            </div>
        </div>
    )
}