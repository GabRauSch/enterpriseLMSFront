import { useRouter } from 'next/router'
import styles from '../styles/videoLink.module.css'

type Props = {
    title: string,
    videoId: number
}

export const VideoLink = ({title, videoId}: Props)=>{
    const router = useRouter();
    const handleClick = (e: React.FormEvent)=>{
        e.preventDefault();
        router.push(`/videos/${videoId}`);
    }
    return (
        <div className={styles.videoItem} onClick={(e)=>{handleClick(e)}}>
            <img src="/play-button.png" width="20px" alt="play button"/>
            <div>{title}</div>
        </div>
    )
}