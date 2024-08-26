import React from "react";
import './App.css'
import Carrusel from './componentes/Carrusel';
import Formulario from './componentes/Formulario';
import Pie from './componentes/Pie';
import Cabecera from "./componentes/Cabecera";
import FechaHora from './componentes/FechaHora';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
<>
<div className="Cabecera">
<Cabecera/>
</div>

<div className="FechaHora">
<FechaHora/>
</div>

<div className="Carro">
<Carrusel/>
</div>

<div className="container container-fluid">
        <br />
        <br />
        <Formulario/>
      </div>
<br/>
<br/>
<div className="Redes">
<Pie/>
</div>

</>

  );
}

export default App;