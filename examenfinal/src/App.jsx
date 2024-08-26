import React from "react";
import './App.css'
import Carrusel from './componentes/Carrusel';
import Formulario from './componentes/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
<>
<div className="Carro">
<Carrusel/>
</div>

<div className="container container-fluid">
        <br />
        <br />
        <Formulario/>
      </div>

</>

  );
}

export default App;