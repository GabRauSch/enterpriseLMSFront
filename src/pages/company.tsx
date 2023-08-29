import { HomeAside } from '@/components/HomeAside';
import styles from '../styles/company.module.css';
import { HomeHeader } from '@/components/HomeHeader';
import {CompanyInfo} from '@/components/CompanyInfo'
import { Segment } from '@/components/Segment';

const Company = () => {
    return (
        <div className={styles.body}>
            <HomeAside active="Company"/>
    
            <div className={styles.userContentContainer}>
                <HomeHeader />
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

export default Company;
