import { HomeAside } from "@/components/HomeAside";
import { HomeHeader } from "@/components/HomeHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { CoursePanel } from "@/components/CoursePanel";
import { Segment } from "@/components/Segment";
import styles from "../styles/home.module.css";
import { Course } from "@/components/Course";
import { logout } from "@/apis/Auth";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import checkAuthentication from "@/helpers/checkAuth";
import Cookies from "js-cookie";

import { parse } from 'cookie';
import { serialize } from 'cookie';
import { getUserById } from "@/apis/User";
import { getUserIdFromToken } from "@/helpers/decodeToken";
import { getCompanyById } from "@/apis/Company";
import { getUserAquisitions } from "@/apis/Subscriptions";
import { SearchBar } from "@/components/SearchBar";

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

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    logout();
    router.push('/login');
  };

  return (
    <div className={styles.body}>
      <HomeAside active="Home" />
      <div className={styles.userContentContainer}>
        <main className={styles.userContent}>
          <ProgressBar points={user.pontuation} remainingPoints={200} level={user.level} />
          <SearchBar />
          <CoursePanel title="Your courses">
              {courses.map((element: any)=>(
                <Course backgroundImage={element.image} name={element.name} description={element.description} courseId={element.id}/>
              ))}
          </CoursePanel>
          <div className={styles.discoverMore}>
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
  console.log(user);
  const companyId = user.companyId
  const company = await getCompanyById(companyId);
  const courses = await getUserAquisitions(parseInt(userId))

  return {
    props: {user, company, courses}
  };
}

export default Home