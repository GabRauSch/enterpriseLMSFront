import styles from '@/styles/pages/search.module.css'

import { getCompanyById } from "@/apis/Company"
import { getUserAquisitions } from "@/apis/Subscriptions"
import { getUserById } from "@/apis/User"
import { SearchBar } from "@/components/Search/SearchBar"
import { getUserIdFromToken } from "@/helpers/decodeToken"
import {parse} from 'cookie'
import { GetServerSidePropsContext } from "next"
import { HomeAside } from '@/components/Aside/HomeAside'
import { SearchFilter } from '@/components/Search/SearchFilter'

type SearchProps = {
    user: any,
    company: any,
    courses: any
}

const Search = ({user, company, courses}: SearchProps)=>{
    return(
        <div className={styles.body}>   
            <HomeAside active="Search" />
            <div className={styles.pageContent}>
                <div className={styles.pageHeader}>
                  <SearchBar />
                  <div className={styles.filter}>
                    <SearchFilter />
                  </div>
                </div>
            </div>
        </div>
    )
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


export default Search