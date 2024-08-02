import React, { useRef } from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      navigate('/Home')
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className={styles.LoginCard}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input ref={usernameRef} type="text" placeholder='Foydalanuvchi nomi'/>
        <input ref={passwordRef} type="password" placeholder='Parolni kiriting!'/>
        <button className={styles.submit} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
