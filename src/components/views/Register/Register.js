import React from 'react';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';

const Register = () => (
  <div className={styles.root}>
    <h3>Register</h3>
    <form action='/#' className={styles.register}>
      <label htmlFor='fname'>First Name</label>
      <input type='text' name='firstname' placeholder='Your name..' />
      <label htmlFor='lname'>Last Name</label>
      <input type='text' name='lastname' placeholder='Your last name..' />
      <label htmlFor='lname'>Email</label>
      <input type='email' name='email' placeholder='Your email address..' />
      <label htmlFor='lname'>Password</label>
      <input type='password' name='lastname' placeholder='Your password..' />
      <label htmlFor='lname'>Confirm Password</label>
      <input type='password' name='lastname' placeholder='Confirm password..' />
    </form>
    <div className={styles.button}>
      <Button variant='main'>Register</Button>
    </div>
  </div>
);

export default Register;
