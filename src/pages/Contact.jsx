import React from 'react';
import '../components/HomeStart/HomeStart.css';
import Navbar from '../components/Navbar/Navbar';
import image from '../assets/images';

function Contact() {
  return (
    <>
      <Navbar />
      <section className="homeStart ">
        <div className="overlay flex flex-col items-center justify-center ">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row">
            <div className="bg-slate-100 py-10 rounded lg:px-5">
              <h2 className=" text-center text-5xl font-semibold mb-5 lg:text-5xl text-blue-400">
                Contact
              </h2>
              {/* <p className="text-white text-center text-md font-semibold mb-5 lg:text-4xl">
                Replies within 24 hours
              </p> */}
              <img src={image.img2} alt="" />
              <div>
                <h2 className="text-center text-2xl mb-4 text-blue-400">Nuestras Redes</h2>
                <div className="flex gap-3 items-center justify-center ">
                  <ion-icon className="shadow-2xl" name="logo-facebook" />
                  <ion-icon name="logo-twitter" />
                  <ion-icon name="logo-instagram" />
                </div>

              </div>
            </div>

            <form
              name="Feedback form"
              method="post"
              className="flex flex-col bg-slate-50 py-5 px-10 rounded lg:w-7/12"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Enter message"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
              />
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-blue-700"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
