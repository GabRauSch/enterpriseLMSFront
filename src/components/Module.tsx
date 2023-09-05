import styles from '../styles/module.module.css'
import { VideoLink } from './VideoLink'

type Props = {
    title: string,
    description: string,
    moduleId: number
}

export const Module = ({title, description, moduleId}: Props)=>{
    return (
        <div className={styles.module}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.moduleVideos}>
                <VideoLink title="Como as mulheres funcionam" videoId={1}/>
                <VideoLink title="Como fazer as mulheres de refém" videoId={2}/>
            </div>
        </div>
    )
}