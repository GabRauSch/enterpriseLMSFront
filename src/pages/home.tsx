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
  company: any
}

const Home = ({user, company}: HomeProps)=> {
  const router = useRouter()
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    logout();
    router.push('/login');
  };

  console.log(user, company)

  return (
    <div className={styles.body}>
      <HomeAside active="Home" />
      <div className={styles.userContentContainer}>
        <HomeHeader companyName={company.name}/>
        <main className={styles.userContent}>
          <ProgressBar points={10} remainingPoints={200} level={4} />
          <CoursePanel title="In Progress">
              <Course backgroundImage="" name="Teste" description="Teste"/>
          </CoursePanel>
          <div className={styles.discoverMore}>
            <h3>Discover More</h3>
            <button onClick={(e)=>{handleLogout(e)}}>logout</button>
            <div className={styles.improvementAreas} style={{ backgroundColor: "red" }}>
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

  const id = getUserIdFromToken(token);
  if(!id){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  const user = await getUserById(parseInt(id))
  const companyId = user.companyId
  const company = await getCompanyById(companyId)
  return {
    props: {user, company}
  };
}

export default Home