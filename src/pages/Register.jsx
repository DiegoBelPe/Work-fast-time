import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

import FormError from '../components/FormError/FormError';
import FormInput from '../components/FormInput/FormInput';
import TitleForm from '../components/TitleForm/TitleForm';
import ButtonForm from '../components/ButtonForm/ButtonForm';

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
      navegate('/login');
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
      <TitleForm text="Register" />
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese su email"
         // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
          label="Email"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingrese su password"
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', {
            minLength,
            validate: validateTrim,
          })}
          label="Password"
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingrese su password"
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password2', {
            validate: validateEquals(getValues('password')),
          })}
          label="Confirmar Password"
          error={errors.password2}
        >
          <FormError error={errors.password2} />
        </FormInput>

        <ButtonForm text="Registrar" type="submit" />

      </form>
    </div>
  );
}

export default Register;
