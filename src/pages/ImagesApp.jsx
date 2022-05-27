/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { app } from '../utils/firebase';
import NavBarUser from '../components/NavbarUser/NavbarUser';

function ImagesApp() {
  const [archivoUrl, setArchivoUrl] = React.useState('');
  const [docus, setDocus] = React.useState([]);

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log('archivo cargado:', archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
      alert('coloca un nombre');
      return;
    }
    const coleccionRef = app.firestore().collection('archivos');
    // eslint-disable-next-line max-len
    const docu = await coleccionRef.doc(nombreArchivo).set({ nombre: nombreArchivo, url: archivoUrl });
    console.log('docu:', docu);
    console.log('archivo cargado:', nombreArchivo, 'ulr:', archivoUrl);
    window.location = '/images-app';
  };

  React.useEffect(async () => {
    const docusList = await app.firestore().collection('archivos').get();
    setDocus(docusList.docs.map((doc) => doc.data()));
  }, []);

  return (
    <>
      <NavBarUser />
      <div className="m-10">
        <h1 className="text-5xl text-center mb-10">Guarda tus Imagenes </h1>
        <form className="grid gap-5 justify-center" onSubmit={submitHandler}>
          <input type="file" onChange={archivoHandler} />
          <input type="text" name="nombre" placeholder="nombra tu archivo" />
          <button className=" text-white bg-blue-700 hover:bg-blue-800 w-20 h-10 items-center">Enviar </button>
        </form>
        <ul className="grid gap-5 ">
          {docus.map((doc) => (
            <li key={doc}>
              <h3 className="text-xl">{doc.nombre}</h3>
              <img src={doc.url} className="h-40 w-auto shadow-xl mt-5 mb-5" />
              <hr />
            </li>

          ))}
        </ul>
      </div>
    </>
  );
}

export default ImagesApp;
