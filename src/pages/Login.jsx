import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, logoutUser } = useContext(UserContext);
  const navegate = useNavigate();
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log('procesando form:', email, password);
    try {
      await loginUser(email, password);
      console.log('Usuario logueado');
      navegate('/dash-user');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeEmailLogin = (e) => { setEmail(e.target.value); };
  const handleChangePasswordLogin = (e) => { setPassword(e.target.value); };
  const handlerClickLogout = () => {
    try {
      logoutUser();
      console.log('Usuario deslogueado');
    } catch (error) {
      console.log('error:', error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmailLogin}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePasswordLogin}
          />
        </label>
        <button type="submit">Ingresar</button>
        <button type="button" onClick={handlerClickLogout}>logout</button>

      </form>
    </div>
  );
}

export default Login;
