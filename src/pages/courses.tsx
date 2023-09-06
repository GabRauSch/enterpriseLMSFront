import styles from '@/styles/pages/courses.module.css';

import { Course } from '@/components/Course/Course';
import { GetServerSidePropsContext } from 'next';
import { parse } from 'cookie';
import { getUserIdFromToken } from '@/helpers/decodeToken';
import { getUserById } from '@/apis/User';
import { getCompanyById } from '@/apis/Company';
import { getUserAquisitions } from '@/apis/Subscriptions';
import { SearchBar } from '@/components/Search/SearchBar';
import { HomeAside } from '@/components/Aside/HomeAside';
import { CoursePanel } from '@/components/Panels/CoursePanel';

type CoursesProps = {
  user: any,
  company: any,
  courses: any
}


const Courses = ({user, company, courses}: CoursesProps) => {
    return (
        <div className={styles.body}>
            <HomeAside active="Courses"/>
            <div className={styles.userContentContainer}>
                <main className={styles.userContent}>
                    <SearchBar/>
                    <CoursePanel title="In progress ▶️">
                        {courses.map((el: any)=>{
                          if(el.progress > 0){
                            return <Course backgroundImage={el.image} description={el.description} name={el.name} progress={el.progress} courseId={el.id}/>
                          }
                        })}
                    </CoursePanel>
                    <CoursePanel title="Subscribed 🎟️">
                    {courses.map((el: any)=>{
                          if(el.progress == 0){
                            return <Course backgroundImage={el.image} description={el.description} name={el.name} progress={el.progress} courseId={el.id}/>
                          }
                        })}
                        <div className={styles.addNewCourse}>
                          + Adicionar mais
                        </div>
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
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  const userId = getUserIdFromToken(token);
  if(!userId){
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  
  const user = await getUserById(parseInt(userId))
  const companyId = user.companyId
  const company = await getCompanyById(companyId);
  const courses = await getUserAquisitions(parseInt(userId))

  return {
    props: {user, company, courses}
  };
}


export default Courses;

