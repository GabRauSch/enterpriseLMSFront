import styles from "@/styles/components/course/course.module.css";
import { useRouter } from "next/router";
import { StudyNowButton } from "../Buttons/StudyNowButton";

type Props = {
    backgroundImage: string,
    name: string,
    description: string,
    courseId: number,
    progress?: number
}

export const Course = ({backgroundImage, name, description, courseId, progress}: Props)=>{
    if(progress){
        progress = progress * 100
    }

    const router = useRouter()
    const handleClick = async (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/course/${courseId}`);
    };

    console.log(backgroundImage, name, description, courseId, progress)

    return (
        <div className={styles.course}>
            <div className={styles.courseName}>{name}</div>
            <div className={styles.courseInformationArea}>
            <img className={styles.courseImage} src={`/${backgroundImage}`}  alt="image" />
                <div className={styles.courseInformation}>
                    {progress ? <p> {progress}% </p>: ''}
                    <div className={styles.description}>{description}</div>
                    <StudyNowButton onClick={(e)=>{handleClick(e)}}/>
                </div>
            </div>
        </div>
    )
}