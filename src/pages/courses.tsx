import { HomeAside } from '@/components/HomeAside';
import styles from '../styles/courses.module.css';
import { HomeHeader } from '@/components/HomeHeader';
import { Course } from '@/components/Course';
import { CoursePanel } from '@/components/CoursePanel';

const Courses = () => {
    return (
        <div className={styles.body}>
            <HomeAside active="Courses"/>
            <div className={styles.userContentContainer}>
                <HomeHeader />
                <main className={styles.userContent}>
                    <CoursePanel title="In progress ▶️">
                        <Course backgroundImage='teste' description='Test message for a course that is available for the user to see' name='Test coursee' progress='45%'/>
                    </CoursePanel>
                    <CoursePanel title="Subscribed 🎟️">
                        <Course backgroundImage='teste' description='Test message for a course that is available for the user to see' name='Test coursee' progress='45%'/>
                    </CoursePanel>
                    <CoursePanel title="Favourites ⭐">
                        <Course backgroundImage='teste' description='Test message for a course that is available for the user to see' name='Test coursee' progress='45%'/>
                    </CoursePanel>
                    <CoursePanel title="Finished ✅">
                        <Course backgroundImage='teste' description='Test message for a course that is available for the user to see' name='Test coursee' progress='45%'/>
                    </CoursePanel>
                </main>
            </div>
        </div>
    );
};

export default Courses;

