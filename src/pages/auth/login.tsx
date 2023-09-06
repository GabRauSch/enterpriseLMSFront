import React, { useState } from 'react';
import { loginUser } from '@/apis/Auth';
import styles from '@/styles/pages/login.module.css';
import stylesRe from '@/styles/components/buttons/submitButton.module.css';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '@/helpers/decodeToken';
import { ErrorMessage } from '@/components/Messages/ErrorMessage';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await loginUser(email, password);
    if(token){
      Cookies.set('access_token', token);  

      const id = getUserIdFromToken(token);
      if(id){
        router.push('/home');
      }
    } else{
      setErrorMessage('Falha ao fazer login');
      setTimeout(()=>{setErrorMessage('')}, 5000)
    }
  };


  return (
    <div className={styles.body}>
      <div className={styles.loginPanel}>
        <h2>Appexia Login</h2>
        <form action="#" method="POST" id="login-form">
          <label>Email</label>
          <div className={styles.inputContainer}>
            <input type="text" id={styles.email} name="email" required 
              onChange={(e) =>setEmail(e.target.value)}/>
          </div>
          
          <label>Password</label>
          <div className={styles.inputContainer}>
            <input type={showPassword ? 'text' : 'password'} id={styles.password} name="password" 
              required value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.olhoIcon} onClick={toggleVisibility}>
              {showPassword ? '🙉' : '🙈'}
            </div>
          </div>
          <input type="submit" className={stylesRe.submitButton}onClick={(e) => {handleSubmit(e);}} value="login"/>
        </form>
      </div>
      <ErrorMessage errorMessage={errorMessage} display={errorMessage ? 'block' : 'none'} />

    </div>
  );
};

export default Login;
