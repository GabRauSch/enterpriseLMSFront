import { HomeHeader } from '@/components/HomeHeader';
import { HomeAside } from '@/components/HomeAside';
import { ProgressBar } from '@/components/ProgressBar';
import { ProfileInfo } from '@/components/ProfileInfo';
import { Segment } from '@/components/Segment';

import styles from '@/styles/profile.module.css';
import { GetServerSidePropsContext } from 'next';
import checkAuthentication from '@/helpers/checkAuth';
import {parse} from 'cookie'

const profile = () => {
    return (
        <div className={styles.body}>
            <HomeAside active="Profile" />
            <div className={styles.userContentContainer}>
                <HomeHeader companyName='Jubile'/>
                <main className={styles.userContent}>
                    <ProgressBar level={4} points={20} remainingPoints={200} />
                    <div className={styles.coursePanel}>
                        {/* Add course panel content here */}
                    </div>
                    <div className={styles.companyPanel}>
                        <ProfileInfo />
                    </div>
                    <div className={styles.discoverMore}>
                        <h3>interests</h3>
                        <div className={styles.interests}>
                            <Segment icon="&#128221;" segmentName="Organziation Level"/>
                            <Segment icon="&#128221;" segmentName="Tech"/>
                        </div>
                    </div>
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


export default profile;
