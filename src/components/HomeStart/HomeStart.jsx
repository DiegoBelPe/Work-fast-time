import React from 'react';
import './HomeStart.css';
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <section className="homeStart grid items-center justify-center text-center lg:items-start">
      <div className=" overlay flex flex-col items-center justify-center text-white p-10 lg:p-2">
        <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56 lg:mt-48 ">
          Accelerate
          {' '}
          <span className="text-blue-400">your work </span>
          {' '}
          for
          productivity
        </h1>

        <div className="ml-auto lg:ml-0">
          <Link
            to="/Contact"
            className="mr-5 bg-blue-700 p-2 px-4 rounded-full font-semibold transition-all hover:bg-blue-900"
          >
            Contact
          </Link>
          <Link
            to="/service"
            className="mr-5 bg-white text-blue-700 p-2 px-4 rounded-full font-semibold transition-all hover:bg-blue-900 hover:text-white"
          >
            Services
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Showcase;
