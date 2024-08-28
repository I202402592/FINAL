import React from "react";
import Facebook from './Imagenes/Facebook.png';
import Instagram from './Imagenes/Instagram.png';
import Youtube from './Imagenes/Youtube.png';

function Pie() {
    return (
        <>
        <div classname = "LogoRedes">
    <img alt = "Cabecera1" src ={Facebook} className ="imgcab1"/>
    <img alt = "Cabecera2" src ={Instagram} className ="imgcab2"/>
    <img alt = "Cabecera3" src ={Youtube} className ="imgcab3"/>
    </div>
    </>
    );
    }
    export default Pie;