import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

import FormError from '../components/FormError/FormError';
import FormInput from '../components/FormInput/FormInput';

function Register() {
  /*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navegate('/');
    } catch (error) {
      console.log(error.code);
      setError('firebase', {
        message: erroresFirebase(error.code),
      });
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
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
        <FormInput
          type="password"
          placeholder="Password2"
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password2', {
            validate: validateEquals(getValues),
          })}
        >
          <FormError error={errors.password2} />
        </FormInput>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;
