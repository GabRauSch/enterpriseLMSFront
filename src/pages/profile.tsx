import { HomeHeader } from '@/components/HomeHeader';
import styles from '../styles/profile.module.css';
import { HomeAside } from '@/components/HomeAside';
import { ProgressBar } from '@/components/ProgressBar';

const profile = () => {
    return (
        <div className={styles.body}>
            <HomeAside active="Profile" />
            
            <div className={styles.userContentContainer}>
                <HomeHeader/>
                <main className={styles.userContent}>
                    <ProgressBar level={4} points={20} remainingPoints={200} />
                    <div className={styles.coursePanel}>
                        {/* Add course panel content here */}
                    </div>
                    <div className={styles.companyPanel}>
                        <div className={styles.companyInfo}>
                            <div className={styles.companyLogo}>
                                <img src="profile.jpg" alt="Company Logo" width="100" />
                            </div>
                            <div className={styles.companyDetails}>
                                <h3>Juninho</h3>
                                <p><strong>Cargo:</strong> Analista de Mulheres</p>
                                <p><strong>Departamento:</strong> Mulheres</p>
                                <p><strong>Total Points:</strong> 690</p>
                            </div>
                            <div className={styles.buttonsCompany}>
                                <button className={styles.buttonOption}>Edit Profile</button>
                                <button className={styles.buttonOption}>Find Courses</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.discoverMore}>
                        <h3>interests</h3>
                        <div className={styles.improvementAreas}>
                            <div className={styles.area}>
                                <span className={styles.areaIcon}>&#128187;</span>
                                <span className={styles.areaText}>Information Technology</span>
                            </div>
                            <div className={styles.area}>
                                <span className={styles.areaIcon}>&#128221;</span>
                                <span className={styles.areaText}>Organization</span>
                            </div>
                            <div className={styles.area}>
                                <span className={styles.areaIcon}>&#128100;</span>
                                <span className={styles.areaText}>Soft Skills</span>
                            </div>
                            <div className={styles.area}>
                                <span className={styles.areaIcon}>&#128233;</span>
                                <span className={styles.areaText}>Communication</span>
                            </div>
                            <div className={styles.area}>
                                <span className={styles.areaIcon}>&#128161;</span>
                                <span className={styles.areaText}>Creative Thinking</span>
                            </div>
                            <div className={styles.area}>
                                <span className={styles.areaIcon}>&#128295;</span>
                                <span className={styles.areaText}>Problem Solving</span>
                            </div>
                            {/* Add more areas here */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default profile;
