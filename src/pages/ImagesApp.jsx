import React from 'react';
import { app } from '../utils/firebase';

function ImagesApp() {
  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log('archivo cargado:', archivo.name);
  };
  return (
    <form>
      <input type="file" name="file" onChange={archivoHandler} />
      <imput type="text" name="nombre" placeholder="Nombre" />
      <button type="submit">Subir</button>
    </form>
  );
}

export default ImagesApp;
