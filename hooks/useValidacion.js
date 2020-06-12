import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {

// validar - funcion contiene las reglas validacion
// state inicial - estado inicial del formulario
// fn -  funcion que va con un hook junto con el state inicial


 // valores campo formulario
    const [valores, guardarValores ] = useState(stateInicial);
// agregar los errores del formulario a un objeto   
    const [errores, guardarErrores ] = useState({});
// booleano para saber si el formulario esta completo  o no
    const [ submitForm, guardarSubmitForm ] = useState(false);

    useEffect(() => {
// se ejecuta cuando el formulario este compoleto y pase a true
        if(submitForm) {
             // revisar si el objeto esta vacio
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) {
                fn(); // Fn = Función que se ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }


    // cuando se realiza el evento de blur
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    }

    return {
        valores, 
        errores, 
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useValidacion;