import React, { useState } from 'react';
import data from '../data';
import image from '../assets/images';

function Projects() {
  // eslint-disable-next-line
  const [items, setItems] = useState(data)
  console.log('data:', data);

  return (
    <section className="py-20 px-5 bg-gray-300 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
      <div className="w-4/5 h-2/4 rounded border border-solid border-blue-500 flex flex-col items-center">
        <div>
          <img className="w-40 h-40 i" src={image.img2} alt="" />
        </div>
        Lorem ipsum dolor sit.
      </div>
      <div className="target_service">
        Lorem ipsum dolor sit.
      </div>
      <div className="target_service">
        Lorem ipsum dolor sit.
      </div>
    </section>
  );
}

export default Projects;
