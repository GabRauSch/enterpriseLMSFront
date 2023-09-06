import styles from '@/styles/pages/company.module.css';

import { GetServerSidePropsContext } from 'next';
import { parse } from 'cookie';
import { getUserIdFromToken } from '@/helpers/decodeToken';
import { getUserById, getUsersByCompanyId } from '@/apis/User';
import { getCompanyById } from '@/apis/Company';
import { getSegmentsByCompanyId } from '@/apis/Segment';
import { getPontuationByEmployees } from '@/helpers/Pontuation';
import { HomeAside } from '@/components/Aside/HomeAside';
import { HomeHeader } from '@/components/Panels/ProgressPanel';
import { CompanyInfo } from '@/components/Company/CompanyInfo';
import { Segment } from '@/components/Company/Segment';

type CompanyProps = {
  user: any,
  company: any,
  segments: any,
  employees: any,
  subscriptionLevel: string,
  pontuation: number
}

const Company = ({user, company, segments, employees, subscriptionLevel, pontuation}: CompanyProps) => {
    return (
        <div className={styles.body}>
            <HomeAside active="Company"/>
            <div className={styles.userContentContainer}>
                <main className={styles.userContent}>
                    <div className={styles.companyPanel}>
                        <CompanyInfo companyName={company.name} employeesCount={employees.length} subscriptionLevel={subscriptionLevel} pontuation={pontuation}/>
                    </div>
                    <div className={styles.discoverMore}>
                        <h3>Segments</h3>
                        <div className={styles.segments}>
                            {segments.map((el: any)=>(
                              <Segment icon="&#128221;" segmentName={el.name}/>
                            ))}
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
  const segments = await getSegmentsByCompanyId(parseInt(companyId));
  const employees = await getUsersByCompanyId(parseInt(companyId));
  const pontuation = getPontuationByEmployees(employees)
  const subscriptionLevel = company.premiumExpiration > 0 ? 'premium' : 'normal'

  return {
    props: {user, company, segments, employees, subscriptionLevel, pontuation}
  };
}

export default Company;
