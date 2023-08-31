import React, { useState } from 'react';
import { loginUser } from '@/apis/Auth';
import styles from '../styles/login.module.css';
import stylesRe from '../styles/submitButton.module.css';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '@/helpers/decodeToken';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await loginUser(email, password);
    if(token){
      Cookies.set('access_token', token);  

      const id = getUserIdFromToken(token);
      if(id){
        router.push('/home');
      }
    } 
  };

  return (
    <div className={styles.body}>
      <div className={styles.loginPanel}>
        <h2>Appexia Login</h2>
        <form action="#" method="POST" id="login-form">
          <label>Email</label>
          <input type="text" id="username" name="username" required
            onChange={(e) =>setEmail(e.target.value)}/>
          <label>Password</label>
          <input
            type="password" id="password" name="password" required
            onChange={(e) =>setPassword(e.target.value)}/>
          <input type="submit" className={stylesRe.submitButton}onClick={(e) => {handleSubmit(e);}} value="login"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
