import styles from "@/styles/pages/admin.module.css";

import { logout } from "@/apis/Auth";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import { parse } from 'cookie';
import { getUserById } from "@/apis/User";
import { getUserIdFromToken } from "@/helpers/decodeToken";
import { getCompanyById } from "@/apis/Company";
import { getUserAquisitions } from "@/apis/Subscriptions";
import { SearchBar } from "@/components/Search/SearchBar";
import { AdminPanel } from "@/components/Panels/AdminPanel";
import { HomeAside } from "@/components/Aside/HomeAside";

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
    router.push('/auth/login');
  };

  return (
    <div className={styles.body}>
      <HomeAside active="Admin" />
      <div className={styles.userContentContainer}>
        <main className={styles.userContent}>
            <h1>Painel</h1>
            <SearchBar />
            <AdminPanel />
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