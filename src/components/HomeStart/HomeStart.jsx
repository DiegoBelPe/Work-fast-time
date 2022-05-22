import React from 'react';
import './HomeStart.css';
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <>
      <section className="homeStart">
        <div className="overlay flex flex-col items-center justify-center text-white px-5 mt-20">
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56 ">
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
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
    </>
  );
}

export default Showcase;
