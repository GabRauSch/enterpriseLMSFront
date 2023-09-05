import { useRouter } from 'next/router';
import styles from '@/styles/courseId.module.css'
import { ProgressModules } from '@/components/Course/ProgressModules';
import { Module } from '@/components/Course/Module';

function Course() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className={styles.body}>
            <header className={styles.pageHeader}>
                <h1>Conquistando mulheres</h1>
            </header>
            <div className={styles.container}>
                <div className={styles.infoArea}>
                    <img className={styles.courseImage} src="/course.jpg" alt="Imagem do Curso"/>
                    <div className={styles.courseInfo}>
                        <h2>Informações do Curso</h2>
                        <p>O curso online "Desvendando a Arte da Conquista" é uma jornada transformadora que visa ajudar homens a desenvolverem habilidades essenciais para estabelecer conexões autênticas e significativas com mulheres.</p>
                        <ProgressModules progressDivision={[0.3, 0.7, 0.9]} progress={0.43}/>
                        <div className={styles.points}>
                            <p>Avaliação do curso: 5/5 (32)</p>
                            <div className={styles.classifyCourse}>
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                </div>
                <section className={styles.container}>
                    <h2>Modules</h2>
                    <Module title="1. conquistando mulheres" description="O curso online etc..." moduleId={1}/>
                    <Module title="2. conquistando mulheres" description="O curso online etc..." moduleId={2}/>
                    <Module title="3. conquistando mulheres" description="O curso online etc..." moduleId={3}/>
                    <Module title="4. conquistando mulheres" description="O curso online etc..." moduleId={4}/>
                </section>
            </div>
        </div>
    );
}

export default Course;
