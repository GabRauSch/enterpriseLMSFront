import { HomeAside } from '@/components/HomeAside';
import { HomeHeader } from '@/components/HomeHeader';
import { Course } from '@/components/Course';
import { CoursePanel } from '@/components/CoursePanel';

import styles from '@/styles/courses.module.css';
import { GetServerSidePropsContext } from 'next';
import checkAuthentication from '@/helpers/checkAuth';
import { parse } from 'cookie';
import { getUserIdFromToken } from '@/helpers/decodeToken';
import { getUserById } from '@/apis/User';
import { getCompanyById } from '@/apis/Company';
import { getUserAquisitions } from '@/apis/Subscriptions';
import { SearchBar } from '@/components/SearchBar';
import { FilterOption } from '@/components/FilterOption';

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
        destination: '/login',
        permanent: false,
      },
    };
  }

  const userId = getUserIdFromToken(token);
  if(!userId){
    return {
      redirect: {
        destination: '/login',
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

