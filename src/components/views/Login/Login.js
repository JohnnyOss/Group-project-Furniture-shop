import React from 'react';
import styles from './Login.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Login = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h1>Login</h1>
    </div>
    <form>
      <div>
        <h5>
          <FontAwesomeIcon className={styles.icon} icon={faUser} /> Username
        </h5>
        <input type='text' placeholder='Username'></input>
      </div>
      <div>
        <h5>
          <FontAwesomeIcon className={styles.icon} icon={faKey} /> Password
        </h5>
        <input type='password' placeholder='Password'></input>
      </div>
      <Button variant='main' href='/'>
        Log in
      </Button>
    </form>
    <div className={styles.features}>
      <div className={styles.featureBox}>
        <h5>Forgot your password?</h5>
        <Button variant='main' href='/login/#'>
          Reset password
        </Button>
      </div>
      <div className={styles.featureBox}>
        <h5>Need a new account?</h5>
        <Button variant='main' href='/login/#'>
          Sing up
        </Button>
      </div>
    </div>
  </div>
);

export default Login;
