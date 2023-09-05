import styles from '@/styles/signup.module.css';

const signup = ()=>{
    return (
        <div className={styles.body}>
            <div className={styles.registerPanel}>
                <h2>Register Appexia</h2>
                <form action="#" method="POST" id="register-form">
                    <label >Email</label>
                    <input type="text" id="new-username" name="new-username" required/>
                    <label >Password</label>
                    <input type="password" id="new-password" name="new-password" required/>
                    <label>Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default signup