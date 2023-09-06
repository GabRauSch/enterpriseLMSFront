import styles from '@/styles/components/panels/progressPanel.module.css'
import { ProgressBar } from '../Bars/ProgressBar'
import { SquareInfo } from './SquareInfo'

type Props = {
    children: React.ReactNode
}

export const ProgressPanel = ({children}: Props)=>{
    return (
        <header className={styles.container}>
            <div className={styles.headerTitle}>
                <div>Seu progresso</div> 
                <img id={styles.shareItem} src="/compartilhar.png" alt=""  />
            </div>

            <div className={styles.userInfo}>
                <div className={styles.userInfoData}>
                    <SquareInfo title="Nivel" data="5" />
                    <SquareInfo title="Pontos" data="250/300" />
                    <SquareInfo title="Aulas vistas" data="12" />
                    <SquareInfo title="Top empresa" data="120º" />
                    <SquareInfo title="Top global" data="+1000º" />
                </div>
            </div>
            {children}
        </header>
    )
}