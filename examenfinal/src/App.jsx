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
<div className="flex-container">
<div className="Cabecera">
<Cabecera/>
</div>
<div className="FechaHora">
<FechaHora/>
</div>
</div>
<hr style={{border: '1.5px solid darkgreen' }}/>

<div className="Carro">
<Carrusel/>
</div>

<div className="Formulario">
        <br />
        <br />
        <Formulario/>
      </div>

<div className="Redes1">
<Pie/>
</div>
</>
  );
}
export default App;