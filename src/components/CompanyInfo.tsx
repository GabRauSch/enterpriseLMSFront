import styles from '../styles/companyInfo.module.css';
import { CompanyDetails } from './CompanyDetails';
import { InfoAreaButton } from './InfoAreaButton';

type Props = {
    companyName: string,
    employeesCount: number,
    subscriptionLevel: string,
    pontuation: number
}

export const CompanyInfo = ({companyName,employeesCount, subscriptionLevel,pontuation}: Props)=>{
    return (
        <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
                {/* <img src="logoCompanyExample.png" alt="Company Logo" width="100" /> */}
            </div>
            <CompanyDetails companyName={companyName} employeesCount={employeesCount} totalPoints={pontuation} subscriptionLevel={subscriptionLevel}/>
            <div className={styles.buttonsCompany}>
                <InfoAreaButton name="Contact administration"/>
                <InfoAreaButton name="Suggest course"/>
            </div>
        </div>
    )
}