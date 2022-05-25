export const formValidate = () => ({
  required: {
    value: true,
    message: 'El campo email es requerido',
  },
  patternEmail: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'El email no es valido',
  },
  minLength: {
    value: 6,
    message: 'El password debe tener al menos 6 caracteres',
  },
  validateTrim: {
    trim: (v) => {
      if (!v.trim()) {
        return 'El password no puede estar vacio';
      }
      return true;
    },
  },
  validateEquals(value) {
    return {
      equals: (v) => v === value
      || 'El password no coincide',
    };
  },

});

export const erroresFirebase = () => {};
