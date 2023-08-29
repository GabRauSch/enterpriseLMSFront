import styles from '../styles/submitButton.module.css'
type Props = {
    action: string
}

export const SubmitButton = ({action}: Props)=>{
    return (
        <button className={styles.submitButton} type="submit">{action}</button>
    )
}