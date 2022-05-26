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
          <button
            type="button"
            onClick={toPdf}
          >
            Capture as PDF
          </button>
        )}
      </Pdf>
    </>
  );
}

export default PDF;
