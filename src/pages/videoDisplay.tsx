import styles from '../styles/videoDisplay.module.css';

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
            <header className={styles.header}>
                <div className={styles.logo}>Appexia</div>
                <div className={styles.container}>
                    <a>Aula 1 - matando uma cabra por dia</a>
                </div>
                <div className={styles.options}>
                    <img src="dots.png" alt="options" width="20px"/>
                </div>
            </header>
            <div className={styles.page}>
                <section className={styles.mainContent}>
                    <div className={styles.videoPlayerPanel}>
                        <div id="youtube-player">
                        </div>
                    </div>
                    <div className={styles.discussion}>
                        <div className={`${styles.container} ${styles.pageDiscussion}`}>
                            <div className={styles.searchArea}>
                                <input type="text" />
                                <div className={styles.searchButton}>
                                    <img src="search.png" alt="search" width="20px" />
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
                        <div className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionInfo}>
                                    <h3>Section 1 - getting started</h3>
                                    <p>0/5</p>
                                </div>
                                <div className={styles.sectionButton}>
                                    <img src="down-arrow.png" alt="down-arrow" width="10px" />
                                </div>
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.sectionCheck}><input type="checkbox" /></div>
                                <div className={styles.sectionContentInformation}>
                                    <h3>1. Matando a bezerra</h3>
                                    <div className={styles.sectionInformationDuration}>3 min</div>
                                </div>
                            </div>
                            <div className={styles.sectionContent}>
                                <div className={styles.sectionCheck}><input type="checkbox" /></div>
                                <div className={styles.sectionContentInformation}>
                                    <h3>2. Metendo no seu amigo tiktoker</h3>
                                    <div className={styles.sectionInformationDuration}>3 min</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionInfo}>
                                    <h3>Section 1 - getting started</h3>
                                    <p>0/5</p>
                                </div>
                                <div className={styles.sectionButton}>
                                    <img src="down-arrow.png" alt="down-arrow" width="10px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

    )
}

export default videoDisplay