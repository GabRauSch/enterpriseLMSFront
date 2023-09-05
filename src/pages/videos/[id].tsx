import { getCompanyById } from '@/apis/Company';
import { getUserAquisitions } from '@/apis/Subscriptions';
import { getUserById } from '@/apis/User';
import checkAuthentication from '@/helpers/checkAuth';
import { getUserIdFromToken } from '@/helpers/decodeToken';
import { GetServerSidePropsContext } from 'next';
import {parse} from 'cookie';

import styles from '@/styles/videoId.module.css';
import { ClassHeader } from '@/components/ClassHeader';
import { SectionModule } from '@/components/SectionModule';

const videoDisplay = ()=>{
    // function onYouTubeIframeAPIReady() {
    //     var player = new YT.Player('youtube-player', {
    //         videoId: 'dqOZmFSv6hw',
    //         playerVars: {
    //             controls: 1, 
    //             modestbranding: 1, 
    //             showinfo: 1,       
    //             rel: 0, 
    //             color: 'blue'
    //         }
    //     });
    // }

    return (
        <div className={styles.body}>
            <ClassHeader companyName="teste" classTitle="aula 1"/>
            
            <div className={styles.page}>
                <section className={styles.mainContent}>
                    <div className={styles.videoPlayerPanel}>
                        <div id={styles.youtubePlayer}>
                        </div>
                    </div>
                    <div className={styles.discussion}>
                        <div className={`${styles.container} ${styles.pageDiscussion}`}>
                            <div className={styles.searchArea}>
                                <input type="text" />
                                <div className={styles.searchButton}>
                                    <img src="/search.png" alt="search" width="20px" />
                                </div>
                            </div>
                            <h2>All questions</h2>
                            <div className={styles.questions}>
                                <div className={styles.question}>
                                    <div className={styles.questionBody}>
                                        <div className={styles.questionContent}>
                                            <h3>How can I get to know your mother?</h3>
                                            <p>How can I marry a ginger?</p>
                                        </div>
                                        <div className={styles.questionData}>
                                            <p className={styles.writer}>Matheusinho</p>
                                            <p className={styles.timeAgo}>4 years ago</p>
                                        </div>
                                    </div>
                                    <div className={styles.questionAttributes}>
                                        <div className={styles.questionLikes}>
                                            32 👍
                                        </div>
                                        <div className={styles.questionComments}>
                                            12 💬
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.question}>
                                    <div className={styles.questionBody}>
                                        <div className={styles.questionContent}>
                                            <h3>How can I get to know your mother?</h3>
                                            <p>How can I marry a ginger?</p>
                                        </div>
                                        <div className={styles.questionData}>
                                            <div className={styles.writer}>Matheusinho</div>
                                            <p className={styles.timeAgo}>4 years ago</p>
                                        </div>
                                    </div>
                                    <div className={styles.questionAttributes}>
                                        <div className={styles.questionLikes}>
                                            32 👍
                                        </div>
                                        <div className={styles.questionComments}>
                                            12 💬
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className={styles.courseModules}>
                    <div className={styles.asideHeader}>
                        <h2>Content</h2>
                        <p>X</p>
                    </div>
                    <div className={styles.sections}>
                        <SectionModule sectionTitle='Section 1 - teste' totalVideos={5} videoCount={1}/>
                        
                    </div>
                </aside>
            </div>
        </div>

    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = parse(context.req.headers.cookie || '');
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
    console.log(user);
    const companyId = user.companyId
    const company = await getCompanyById(companyId);
    const courses = await getUserAquisitions(parseInt(userId))
  
    return {
      props: {user, company, courses}
    };
}


export default videoDisplay