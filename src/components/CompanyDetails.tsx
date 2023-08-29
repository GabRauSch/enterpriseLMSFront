import styles from '../styles/company.module.css';

type Props = {
    companyName: string,
    employeesCount: number,
    totalPoints: number, 
    subscriptionLevel: string
}
export const CompanyDetails = ({companyName, employeesCount, totalPoints, subscriptionLevel}: Props)=>{
    return (
        <div className={styles.companyDetails}>
            <h3>{companyName}</h3>
            <p><strong>Employees:</strong>{employeesCount}</p>
            <p><strong>Total Points:</strong>{totalPoints}</p>
            <p><strong>Subscription Level:</strong>{subscriptionLevel}</p>
        </div>
    )
}