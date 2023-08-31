import styles from '@/styles/companyDetails.module.css';

type Props = {
    name: string,
    position: number,
    department: string, 
    points: number
}
export const ProfileDetails = ({name, position, department, points}: Props)=>{
    return (
        <div className={styles.companyDetails}>
            <h3>{name}</h3>
            <p><strong>Position:</strong>{position}</p>
            <p><strong>Department:</strong>{department}</p>
            <p><strong>points:</strong>{points}</p>
        </div>
    )
}