import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';
import FormError from '../components/FormError/FormError';
import FormInput from '../components/FormInput/FormInput';
import TitleForm from '../components/TitleForm/TitleForm';
import ButtonForm from '../components/ButtonForm/ButtonForm';
import ButtonLoading from '../components/ButtonLoading/ButtonLoading';

function Login() {
  const { loginUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      await loginUser(email, password);
      navegate('/dash-user');
    } catch (error) {
      console.log(error.code);
      const { code, message } = erroresFirebase(error.code);
      setError(code, {
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TitleForm text="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email"
          type="email"
          placeholder="Ingrese su email"
         // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          label="Password"
          type="password"
          placeholder="Ingrese su password"
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', {
            minLength,
            validate: validateTrim,
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        {
          loading
            ? <ButtonLoading />
            : <ButtonForm text="Login" type="submit" />
        }

      </form>
    </div>
  );
}

export default Login;
