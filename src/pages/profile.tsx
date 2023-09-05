import { HomeHeader } from '@/components/HomeHeader';
import { HomeAside } from '@/components/HomeAside';
import { ProgressBar } from '@/components/ProgressBar';
import { ProfileInfo } from '@/components/ProfileInfo';
import { Segment } from '@/components/Segment';

import styles from '@/styles/profile.module.css';
import { GetServerSidePropsContext } from 'next';
import checkAuthentication from '@/helpers/checkAuth';
import {parse} from 'cookie'
import { getUserIdFromToken } from '@/helpers/decodeToken';
import { getCompanyById } from '@/apis/Company';
import { getUserById } from '@/apis/User';
import { getUserAquisitions } from '@/apis/Subscriptions';

type ProfileProps = {
  company: any,
  user: any,
  courses: any
}

const profile = ({company, user, courses}: ProfileProps) => {
    return (
        <div className={styles.body}>
            <HomeAside active="Profile" />
            <div className={styles.userContentContainer}>
                <HomeHeader companyName={company.name} profilePhoto={user.profilePhoto} />
                <main className={styles.userContent}>
                    <ProgressBar points={user.pontuation} remainingPoints={200} level={user.level} /> 
                    <div className={styles.coursePanel}>
                        {/* Add course panel content here */}
                    </div>
                    <div className={styles.companyPanel}>
                        <ProfileInfo name={user.name} pontuation={user.pontuation} position={user.position} segment={user.department}/>
                    </div>
                    {/* <div className={styles.discoverMore}>
                        <h3>interests</h3>
                        <div className={styles.interests}>
                            <Segment icon="&#128221;" segmentName="Organziation Level"/>
                            <Segment icon="&#128221;" segmentName="Tech"/>
                        </div>
                    </div> */}
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


export default profile;
