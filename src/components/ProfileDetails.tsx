import styles from '@/styles/profileDetails.module.css';

type Props = {
    name: string,
    position: string,
    segment: string, 
    points: number
}
export const ProfileDetails = ({name, position, segment, points}: Props)=>{
    return (
        <div className={styles.profileDetails}>
            <h3>{name}</h3>
            <p><strong>Position: </strong>{position}</p>
            <p><strong>Segment: </strong>{segment}</p>
            <p><strong>points: </strong>{points}</p>
        </div>
    )
}