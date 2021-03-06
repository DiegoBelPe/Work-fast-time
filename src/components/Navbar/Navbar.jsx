import React, { useState } from 'react';
import Button from '../Button/Button';
import images from '../../assets/images';

function Navbar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/service' },
    { name: 'Contact', link: '/contact' },

  ];
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img className="lg:block h-12 w-auto" src={images.img10} alt="" />
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'} />
        </button>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100'}`}>
          {
            links.map((link) => (
              <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500 font-mono">{link.name}</a>
              </li>

            ))
          }
          <Button>
            Login
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
