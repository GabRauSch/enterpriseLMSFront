import { Course } from "@/components/Course";
import { HomeAside } from "@/components/HomeAside";
import { HomeHeader } from "@/components/HomeHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { SegmentArea } from "@/components/SegmentArea";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <HomeAside active="Home"/>
      <div className={styles.userContentContainer}>
          <HomeHeader />
          <main className={styles.userContent}>
              <ProgressBar points={10} remainingPoints={200} level={4} />
              <div className={styles.coursePanel}>
                  <h3>In Progress</h3>
                  <div className={styles.courses}>
                    <Course backgroundImage='teste' description='Test message for a course that is available for the user to see' name='Test coursee' progress='45%'/>
                  </div>
              </div>
              <div className={styles.discoverMore}>
                  <h3>Discover More</h3>
                  <div className={styles.improvementAreas}>
                      <SegmentArea />
                  </div>
              </div>
          </main>
      </div>
    </div>
  )
}
