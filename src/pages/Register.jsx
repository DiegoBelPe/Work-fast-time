import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Register() {
  /*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
    try {
      await registerUser(email, password);
      console.log('Usuario registrado');
      navegate('/');
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('email', {
            message: 'El email ya esta en uso',
          });
          break;
        case 'auth/invalid-email':
          setError('email', {
            message: 'formato de email valido',
          });
          break;
        default:
          console.log('Error desconocido');
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          id="email"
          type="email"
          placeholder="Email"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required: {
              value: true,
              message: 'El campo email es requerido',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'El email no es valido',
            },
          })}
        />
        {errors.email && errors.email.message}
        <input
          id="password"
          type="password"
          placeholder="Password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', {
            setValueAs: (v) => v.trim(),
            minLength: {
              value: 6,
              message: 'El password debe tener al menos 6 caracteres',
            },
            validate: {
              trim: (v) => {
                if (!v.trim()) {
                  return 'El password no puede estar vacio';
                }
                return true;
              },
            },
          })}
        />
        {errors.password && errors.password.message}
        <input
          id="password"
          type="password"
          placeholder="Password2"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password2', {
            validate: {
              equals: (v) => v === getValues('password') || 'El password no coincide',

            },
          })}
        />
        {errors.password2 && errors.password2.message}

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;
