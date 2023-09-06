import React from 'react'
import styles from '@/styles/components/panels/coursePanel.module.css';

type Props = {
    title: string,
    children: React.ReactNode
}

export const CoursePanel = ({title, children}: Props)=>{
    return (
        <div className={styles.coursePanel}>
            <h3>{title} </h3>
            <div className={styles.courses}>
                {children}
            </div>
        </div>
    )
}