import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('procesando form:', email, password);
    try {
      await registerUser(email, password);
      console.log('Usuario registrado');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeEmail = (e) => { setEmail(e.target.value); };
  const handleChangePassword = (e) => { setPassword(e.target.value); };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;
