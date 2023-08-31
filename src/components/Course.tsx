import styles from "../styles/course.module.css";
import { StudyNowButton } from "@/components/StudyNowButton";

type Props = {
    backgroundImage: string,
    name: string,
    description: string,
    progress?: string
}

export const Course = ({backgroundImage, name, description, progress}: Props)=>{
    return (
        <div className={styles.course}>
            <div className={styles.courseImage} style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <h4>{name}</h4>
            <p>{progress}</p>
            <p>{description}</p>
            <StudyNowButton />
        </div>
    )
}