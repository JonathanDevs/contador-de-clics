import React from 'react';
import '../stylesheet/Boton.css'

// sintaxis de destructuracion sin usar props
// Se mostrar varios props 1 igual a la propieda, 2, asigno la clase y el operador ternario toma decision
// 3 cuando ocurra el evento onClick activo la funcion manejarClick
function Boton({ texto, esBotonDeClic, manejarClic }){
  return(
    <button
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
    {texto}
    </button>
  );
}

export default Boton;
// exportacion por defecto cuando lo hacemos de esta manera solo podemos exportar un elemento del archivo