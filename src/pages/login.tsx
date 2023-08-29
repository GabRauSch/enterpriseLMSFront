import { SubmitButton } from '@/components/SubmitButton'
import styles  from '../styles/login.module.css'

const login = ()=>{
    return (
        <div className={styles.body}>
            <div className={styles.loginPanel}>
                <h2>Appexia Login</h2>
                <form action="#" method="POST" id="login-form">
                    <label>Email</label>
                    <input type="text" id="username" name="username" required/>
                    <label>Password</label>
                    <input type="password" id="password" name="password" required/>
                    <SubmitButton action="Login"/>
                </form>
            </div>
        </div>
    )
}

export default login
