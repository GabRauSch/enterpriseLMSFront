import styles from '../styles/company.module.css';
import { CompanyDetails } from './CompanyDetails';
import { InfoAreaButton } from './InfoAreaButton';

export const CompanyInfo = ()=>{
    return (
        <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
                {/* <img src="logoCompanyExample.png" alt="Company Logo" width="100" /> */}
            </div>
            <CompanyDetails companyName="Intelbras" employeesCount={12} totalPoints={1200} subscriptionLevel="Premium"/>
            <div className={styles.buttonsCompany}>
                <InfoAreaButton name="Contact administration"/>
                <InfoAreaButton name="Suggest course"/>
            </div>
        </div>
    )
}