import styles from '@/styles/adminPanel.module.css'
import { PanelBlock } from './PanelBlock'

export const AdminPanel = ()=>{
    return (
        <>
            <div className={styles.adminPanel}>
                <PanelBlock icon="📈" name="analytics" data="" action="+ informações"/>
            </div>
            <div className={styles.adminPanel}>
                <PanelBlock icon="🪪" name="usuarios ativos" data="10/100" action="+ informações"/>
                <PanelBlock icon="👆" name="adicionar usuario" data="" action="adicionar"/>
                <PanelBlock icon="🔓" name="permissões de usuarios" data="" action="alterar"/>
            </div>
            <div className={styles.adminPanel}>
                <PanelBlock icon="📖" name="cursos adiquiridos" data="23/100" action='+ informações'/>
                <PanelBlock icon="🎟️" name="adiquirir cursos" data="" action='adicionar'/>
                <PanelBlock icon="🪄" name="criar novo curso" data="" action='criar'/>
            </div>
            <div className={styles.adminPanel}>
                <PanelBlock icon="🏙️" name="Informações da empresa" data="" action="alterar"/>
                <PanelBlock icon="🏷️" name="gerenciar setores" data="" action="gerenciar"/>
            </div>
        </>
    )
}