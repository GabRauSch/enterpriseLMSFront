import { HomeAside } from '@/components/HomeAside';
import { HomeHeader } from '@/components/HomeHeader';
import {CompanyInfo} from '@/components/CompanyInfo'
import { Segment } from '@/components/Segment';

import styles from '@/styles/company.module.css';
import { GetServerSidePropsContext } from 'next';
import checkAuthentication from '@/helpers/checkAuth';
import { parse } from 'cookie';

const Company = () => {
    return (
        <div className={styles.body}>
            <HomeAside active="Company"/>
    
            <div className={styles.userContentContainer}>
                <HomeHeader companyName='Jubileu'/>
                <main className={styles.userContent}>
                    <div className={styles.companyPanel}>
                        <CompanyInfo />
                    </div>
                    <div className={styles.discoverMore}>
                        <h3>Segments</h3>
                        <div className={styles.segments}>
                            <Segment icon="&#128221;" segmentName="Organziation Level"/>
                            <Segment icon="&#128187;" segmentName="Information Technology"/>
                            <Segment icon="&#128100;" segmentName="HR"/>
                            <Segment icon="&#128233;" segmentName="Sales" />
                            <Segment icon="&#128161;" segmentName="Administrative" />
                            <Segment icon="&#128295;" segmentName="P&D" />
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

export default Company;
