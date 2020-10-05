import React from 'react';
import LaReceta from '../MultimediaComponents/LaReceta.mp4';
import BotonGeneral from '../Botones/BotonGenrales';

const clickBton = (url) => {
  console.log('estoy escuchando');
  alert( 'Para realizar la donación te redireccionaremos a www.yodono.cl' );
  window.open('https://yodono.cl/proyecto/207/CultivaComidaparaTods')
}

const ContainerMultimediaHome = () => {
  return (
    <div className='sectionMultimedia'>
      <section className="overlay">
        <h5>LA RECETA PARA UN MEJOR PAÍS</h5>
        <h2> Ayúdanos a sumar más platos de comida en las mesas de los chilenos </h2>
        < BotonGeneral
          contenidobtn={'Regala un almuerzo'}
          function= {clickBton}
        />
        <br />
        <BotonGeneral
          contenidobtn={'Conoce más'}
        />
      </section>

      <video className="video"
        autoPlay muted
        loop >
        <source src={LaReceta} type="video/mp4" />
      </video>


    </div>
  )
}

export default ContainerMultimediaHome;