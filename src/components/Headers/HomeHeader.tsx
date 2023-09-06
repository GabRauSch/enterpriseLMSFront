import styles from '@/styles/components/headers/homeHeader.module.css';

export const HomeHeader = ()=>{
    return (
        <div className={styles.homeHeader}>
            <div>
                <img src='/notificacao.png' alt='notificacao' />
            </div>
            <div>
                <img src="/certificado.png" alt="certificados"/>
            </div>
            <div>
                <img src="/apoio-suporte.png" alt="suporte" />
            </div>
            <div>
                <img src="/sair.png" alt="logout" />
            </div>
        </div>
    )
}