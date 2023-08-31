import React from 'react'
import styles from '@/styles/coursePanel.module.css';

type Props = {
    title: string,
    children: React.ReactNode
}

export const CoursePanel = ({title, children}: Props)=>{
    return (
        <div className={styles.coursePanel}>
            <h3>{title} </h3>
            <div className={styles.courses} style={{backgroundColor: "red"}}>
                {children}
            </div>
        </div>
    )
}