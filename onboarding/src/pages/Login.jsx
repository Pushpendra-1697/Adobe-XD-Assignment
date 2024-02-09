import React, { useState } from 'react'
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <input type='email' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button label={'Login'} bgColor={(email && password) ? '#6C25FF' : '#CBCBCB'} color={'#ECECEC'} isDisabled={(email && password) ? false : true} redirectPath='/profile' />
      </div>
    </div>
  );
}

export default Login