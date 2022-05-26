import React from 'react';
import image from '../assets/images';
import Navbar from '../components/Navbar/Navbar';
import '../components/HomeStart/HomeStart.css';

function Projects() {
  // eslint-disable-next-line

  return (
    <>
      <Navbar />
      <div className="homeStart mt-24 ">
        <div>
          <h2 className="text-center font-bold text-4xl text-white">Disfruta de nuestros servicios </h2>
        </div>
        <section className="py-5 px-5  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32 lg:py-5 lg:px-5">
          <div className="w-auto h-auto md:h-2/4  lg:h-2/4 rounded border border-solid shadow-lg flex flex-col items-center bg-blue-400">
            <div>
              <img className="w-40 h-40 " src={image.img3} alt="" />
            </div>
            <div className="block text-center text-white font-semibold text-lg">
              ✅ Elabora informes de tu trabajo a la medida
              de
              tus necesidades y obten un archivo pdf con los resultados.
            </div>
          </div>
          <div className="w-auto h-auto md:h-2/4  lg:h-2/4 rounded border border-solid shadow-lg flex flex-col items-center bg-blue-400">
            <div>
              <img className="w-40 h-40 " src={image.img4} alt="" />
            </div>
            <div className="block text-center text-white font-semibold text-lg">
              ✅ Lleva un control de tus tareas y fortalece tu productividad
              en el trabajo.
            </div>
          </div>
          <div className="w-auto h-auto md:h-2/4  lg:h-2/4 rounded border  flex flex-col items-center shadow-lg bg-blue-400">
            <div>
              <img className="w-40 h-40 " src={image.img5} alt="" />
            </div>
            <div className="block text-center text-white font-semibold text-lg">
              ✅ Agenda tus  citas, entregas o reuniones de tu trabajo sin perder detalles.
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default Projects;
