import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';
import FormError from '../components/FormError/FormError';
import FormInput from '../components/FormInput/FormInput';

function Login() {
  const { loginUser } = useContext(UserContext);
  const navegate = useNavigate();
  const { required, patternEmail, minLength, validateTrim } = formValidate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navegate('/dash-user');
    } catch (error) {
      console.log(error.code);
      const { code, message } = erroresFirebase(error.code);
      setError(code, {
        message,
      });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Email"
         // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Password"
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', {
            minLength,
            validate: validateTrim,
          })}
        >
          <FormError error={errors.password} />
        </FormInput>
        <button type="submit">Ingresar</button>

      </form>
    </div>
  );
}

export default Login;
