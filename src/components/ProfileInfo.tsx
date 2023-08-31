import styles from '../styles/companyInfo.module.css';
import { CompanyDetails } from './CompanyDetails';
import { InfoAreaButton } from './InfoAreaButton';
import { ProfileDetails } from './ProfileDetails';

export const ProfileInfo = ()=>{
    return (
        <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
                {/* <img src="logoCompanyExample.png" alt="Company Logo" width="100" /> */}
            </div>
            <ProfileDetails name="Juninho" position={12} department="women" points={2} />
            <div className={styles.buttonsCompany}>
                <InfoAreaButton name="Contact administration"/>
                <InfoAreaButton name="Suggest course"/>
            </div>
        </div>
    )
}