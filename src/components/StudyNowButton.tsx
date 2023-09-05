import styles from '../styles/studyNowButton.module.css';

type Props = {
    onClick: (e: React.FormEvent)=>void
}

export const StudyNowButton = ({onClick}: Props)=>{
    return (
        <button className={styles.courseButton} onClick={onClick}>Study Now</button>
    )
}