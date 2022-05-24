import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <Link
      to="/login"
      className="bg-indigo-600 text-white font-sans py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
    >
      {children}
    </Link>
  );
}

export default Button;
