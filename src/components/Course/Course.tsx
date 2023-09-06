import styles from "@/styles/components/course/course.module.css";
import { useRouter } from "next/router";
import { StudyNowButton } from "@/components/Buttons/StudyNowButton";

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

    return (
        <div className={styles.course}>
            <div className={styles.courseImage} style={{backgroundImage: `url(/${backgroundImage})`}}></div>
            <h4>{name}</h4>
            <div className={styles.courseInformation}>
                {progress ? <p> {progress}% </p>: ''}
                <p>{description}</p>
                <StudyNowButton onClick={(e)=>{handleClick(e)}}/>
            </div>
        </div>
    )
}