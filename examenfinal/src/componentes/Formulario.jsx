import { useState } from "react";
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPasword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const realizarEnvio = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (!apellidos) newErrors.apellidos = 'Los apellidos son obligatorio';
        if (!email) newErrors.email = 'El Email es obligatorio';
        if (!contraseña) newErrors.contraseña = 'El Contraseña es obligatorio';
        if (!regexTexto.test(nombre)) { alert('El nombre no es válido') };
        if (!regexTexto.test(apellidos)) { alert('Los apellidos no son válidos') };
        if (!regexEmail.test(email)) { alert('El email ingresado no es válido') };
        if (!regexPasword.test(contraseña)) { alert('La contraseña ingresada no es válida') };
        setErrors(newErrors);
        if (nombre === '' || apellidos === '' || email === '' || contraseña === '') {
            alert('Los cajas de texto están vacias');
        }
        if ((regexTexto.test(nombre) === false && nombre != '') || (regexTexto.test(apellidos) === false && apellidos != '') || (regexTexto.test(nombre) === false && nombre != '') || (regexTexto.test(nombre) === false && nombre != '')) {
            alert('No se ha ingresado datos válidos');
            console.log(nombre);
            alert(`Datos ingresados: { ${nombre}, ${apellidos}, ${email}, ${contraseña} }`);
        }

        if ((regexEmail.test(email) === false && email != '') || (regexEmail.test(email) === false && email != '') || (regexEmail.test(email) === false && email != '') || (regexEmail.test(email) === false && email != '')) {
            alert('No se ha ingresado datos válidos');
            console.log(email);
            alert(`Datos ingresados: { ${nombre}, ${apellidos}, ${email}, ${contraseña} }`);

        }

        if ((regexPasword.test(contraseña) === false && contraseña != '') || (regexPasword.test(contraseña) === false && contraseña != '') || (regexPasword.test(contraseña) === false && contraseña != '') || (regexPasword.test(contraseña) === false && contraseña != '')) {
            alert('No se ha ingresado datos válidos');
            console.log(contraseña);
            alert(`Datos ingresados: { ${nombre}, ${apellidos}, ${email}, ${contraseña} }`);
        }
    }

        const cambioNombre = (e) => setNombre(e.target.value);
        const cambioApellido = (e) => setApellidos(e.target.value);
        const cambioEmail = (e) => setEmail(e.target.value);
        const cambioContraseña = (e) => setContraseña(e.target.value);

        return (
            <>
                <Form onSubmit={realizarEnvio}>
                    <Form.Group>
                        <Form.Control type="text" value={nombre} onChange={cambioNombre} placeholder="First Name"></Form.Control>
                        <Form.Control type="text" value={apellidos} onChange={cambioApellido} placeholder="Last Name"></Form.Control>
                        <Form.Control type="text" value={email} onChange={cambioEmail} placeholder="Email"></Form.Control>
                        <Form.Control type="text" value={contraseña} onChange={cambioContraseña} placeholder="Password"></Form.Control>
                    </Form.Group>
                    <Button style={{background: 'green' }} variant="primary" type="submit" >Submit</Button>
                </Form>
            </>
        );
    }

    export default Formulario;