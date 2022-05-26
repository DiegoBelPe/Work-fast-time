import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images';

function ButtonReport() {
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-center font-bold text-4xl text-black">Bienvenid@ </h2>
      </div>
      <section className="py-20 px-20  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:h-screen lg:pt-32 lg:justify-items-center">
        <div className="w-auto h-auto md:h-2/4  lg:h-2/4 lg:w-80 rounded border border-solid shadow-lg flex flex-col items-center bg-blue-400">
          <div>
            <img className="w-40 h-40 " src={image.img7} alt="" />
          </div>
          <div className="block text-center text-white font-semibold text-lg">
            Elaborar Informe de actividades
          </div>
          <Link
            to="/form-report"
            className="mt-8 bg-white text-blue-700 p-2 px-4 rounded-full font-semibold transition-all hover:bg-blue-900 hover:text-white"
          >
            Iniciar
          </Link>
        </div>
        <div className="w-auto h-auto md:h-2/4  lg:h-2/4 lg:w-80 rounded border border-solid shadow-lg flex flex-col items-center bg-blue-400">
          <div>
            <img className="w-40 h-40 " src={image.img8} alt="" />
          </div>
          <div className="block text-center text-white font-semibold text-lg">
            Ver reporte de mis Informes
          </div>
          <Link
            to="/service"
            className="mt-8 bg-white text-blue-700 p-2 px-4 rounded-full font-semibold transition-all hover:bg-blue-900 hover:text-white"
          >
            Ver
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ButtonReport;
