import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; 
import { useState } from 'react';


// lo importamos asignamos el nombre en react 'freeCodeCampLogo' y lo ubicamos en la carpeta que corresponde el nombre de la imagen de 'from debe ser igual al nombre de la misma en su carpeta'

function App() {

  const [numClics, setNumClics] = useState(0);
 
  // se crean las arrow funtions y se asigna como props en los botones que correspondan
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='frecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          // agregamos el nombre entre llaves y ya estaria invocado 
          alt='Logo de freCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numClics} />
        {/* numClics es el estado del componente */}
        <Boton 
        texto='Clic'
        esBotonDeClick={true} 
        manejarClic={manejarClic} />
        {/* No pueden quedar sin argumentos al expresiones entre llaves */}
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false} 
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
