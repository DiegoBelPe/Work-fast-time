import React from 'react';
import Pdf from 'react-to-pdf';
import '../App.css';
import images from '../assets/images';

const ref = React.createRef();

// eslint-disable-next-line react/prop-types
function PDF({ title, image, content }) {
  return (
    <>
      <div className="Post" ref={ref}>
        <img className="w-32 " src={images.img9} alt="Post" />
        <h1 className="text-center text-5xl mb-10 ">
          {title}
        </h1>
        <h3 className="font-bold text-center text-xl ">{image}</h3>
        <p className="font-sans  text-center italic text-lg mt-6">{content}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => (
          <div className="grid justify-center mt-10">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={toPdf}
            >
              Descargar PDF
            </button>
          </div>
        )}
      </Pdf>
    </>
  );
}

export default PDF;
