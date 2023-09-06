import styles from '@/styles/components/panels/adminPanel.module.css'
import { PanelBlock } from './PanelBlock'

export const AdminPanel = ()=>{
    return (
        <>
            <div className={styles.adminPanel}>
                <PanelBlock icon="📈" name="analytics" data="" action="+ informações" clicked="/admin/analytics"/>
                <PanelBlock icon="📋" name="criar pesquisa" data="" action="criar" clicked="/analytics"/>
            </div>
            <div className={styles.adminPanel}>
                <PanelBlock icon="🪪" name="usuarios ativos" data="10/100" action="+ informações" clicked="/analytics"/>
                <PanelBlock icon="👆" name="adicionar usuario" data="" action="adicionar" clicked="/analytics"/>
                <PanelBlock icon="🔓" name="permissões de usuarios" data="" action="alterar" clicked="/analytics"/>
            </div>
            <div className={styles.adminPanel}>
                <PanelBlock icon="📖" name="cursos adiquiridos" data="23/100" action='+ informações' clicked="/analytics"/>
                <PanelBlock icon="🎟️" name="adiquirir cursos" data="" action='adicionar' clicked="/analytics"/>
                <PanelBlock icon="🪄" name="criar novo curso" data="" action='criar' clicked="/analytics"/>
            </div>
            <div className={styles.adminPanel}>
                <PanelBlock icon="🏙️" name="Informações da empresa" data="" action="alterar" clicked="/analytics"/>
                <PanelBlock icon="🏷️" name="gerenciar setores" data="" action="gerenciar" clicked="/analytics"/>
            </div>
        </>
    )
}