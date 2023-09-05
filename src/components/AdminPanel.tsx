import styles from '@/styles/adminPanel.module.css'
import { PanelBlock } from './PanelBlock'

export const AdminPanel = ()=>{
    return (
        <div>
            <PanelBlock icon="🫥" name="usuarios ativos" data="10/100" />
        </div>
    )
}