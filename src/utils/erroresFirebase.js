export const erroresFirebase = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'El email ya esta en uso';
    case 'auth/invalid-email':
      return 'formato de email valido';
    default:
      return 'Error desconocido';
  }
};

export const erroresFirebaseLogin = () => {};
