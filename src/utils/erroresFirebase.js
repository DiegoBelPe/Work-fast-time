export const erroresFirebase = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return {
        code: 'email',
        message: 'Usuario ya registrado',

      };
    case 'auth/invalid-email':
      return {
        code: 'email',
        message: 'Email no valido',

      };
    case 'auth/user-not-found':
      return {
        code: 'email',
        message: 'Usuario no registrado',

      };
    case 'auth/wrong-password':
      return {
        code: 'password',
        message: 'Contraseña incorrecta',

      };
    default:
      return {
        code: 'email',
        message: 'Error desconocido',

      };
  }
};

export const erroresFirebaseLogin = () => {};
