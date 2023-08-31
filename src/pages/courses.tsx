import { HomeAside } from '@/components/HomeAside';
import { HomeHeader } from '@/components/HomeHeader';
import { Course } from '@/components/Course';
import { CoursePanel } from '@/components/CoursePanel';

import styles from '@/styles/courses.module.css';
import { GetServerSidePropsContext } from 'next';
import checkAuthentication from '@/helpers/checkAuth';
import { parse } from 'cookie';

const Courses = () => {
    return (
        <div className={styles.body}>
            <HomeAside active="Courses"/>
            <div className={styles.userContentContainer}>
                <HomeHeader companyName='Feiedo'/>
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


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies: any = parse(context.req.headers.cookie || '');
  const token = cookies.access_token || null;
  
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
}


export default Courses;

