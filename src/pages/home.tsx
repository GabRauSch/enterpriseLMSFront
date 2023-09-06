import styles from "@/styles/pages/home.module.css";
import { Course } from "@/components/Course/Course";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import { parse } from 'cookie';
import { getUserById } from "@/apis/User";
import { getUserIdFromToken } from "@/helpers/decodeToken";
import { getCompanyById } from "@/apis/Company";
import { getUserAquisitions } from "@/apis/Subscriptions";
import { SearchBar } from "@/components/Search/SearchBar";
import { HomeAside } from "@/components/Aside/HomeAside";
import { CoursePanel } from "@/components/Panels/CoursePanel";
import { Segment } from "@/components/Company/Segment";
import { ProgressPanel } from "@/components/Panels/ProgressPanel";
import { ProgressBar } from "@/components/Bars/ProgressBar";
import { HomePanel } from "@/components/Panels/HomePanel";
import { SquareAndIcon } from "@/components/Panels/SquareAndIcon";
import { HomeHeader } from "@/components/Headers/HomeHeader";

interface CompanyData {
  id: number;
  name: string;
  ownerId: number;
  premiumExpiration: string | null;
  federationUnity: string | null;
  city: string | null;
  detailedLocal: string | null;
  instagram: string | null;
  youtube: string | null;
  facebook: string | null;
  logo: string | null;
}

interface HomeProps {
  user: any;
  company: any,
  courses: any
}

const Home = ({user, company, courses}: HomeProps)=> {
  const router = useRouter();
  return (
    <div className={styles.body}>
      <HomeAside active="Home" />
      <div className={styles.userContentContainer}>
        <HomeHeader />
        <main className={styles.userContent}>
          <ProgressPanel>
            <ProgressBar points={user.pontuation} remainingPoints={200} level={user.level} />
          </ProgressPanel>
          <div className="container">
            <h3>Empresa:</h3>
            <div className="containerContent"></div>
              <SquareAndIcon iconUrl="mapa.png" title="Trilhas"  />
              <SquareAndIcon iconUrl="verificar.png" title="Recomendados"  />
              <SquareAndIcon iconUrl="relogio.png" title="Pendentes"  />
          </div>
          <div className="container">
            <h3>Seus Cursos:</h3>
            <div className="containerContent">
              {courses.map((element: any, key: number)=>(
                <Course key={key} backgroundImage={element.image} name={element.name} description={element.description} courseId={element.id}/>
              ))}
            </div>
          </div>
          <div className='container'>
            <h3>Discover More</h3>
            <div className={styles.improvementAreas}>
              <Segment segmentName="Information Technology" icon="🫧" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parse(context.req.headers.cookie || '');
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
  console.log(user);
  const companyId = user.companyId
  const company = await getCompanyById(companyId);
  const courses = await getUserAquisitions(parseInt(userId))

  return {
    props: {user, company, courses}
  };
}

export default Home