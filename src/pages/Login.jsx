import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

function Login() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <h2>{user ? 'En linea' : 'offline'}</h2>
    </div>
  );
}

export default Login;
