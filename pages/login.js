import React, { useState } from 'react';
import Router from 'next/router';

import { css } from '@emotion/core';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';
// validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';
import Layout from '../components/layout/Layout';

import firebase from '../firebase';



const STATE_INICIAL = {
  email: '',
  password: ''
}

const Login = () => {

  const [ error, guardarError] = useState(false);

  // hook del use validacion
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
// destructuring de valores del hook
  const { email, password } = valores;
// funcion fn que se ejecuta del hook en el useffect
  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error.message);
      guardarError(error.message);
    }
  }


  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Iniciar Sesión</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >  
              <Campo>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
              {errores.email && <Error>{errores.email}</Error> }
  
              <Campo>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
              {errores.password && <Error>{errores.password}</Error> }

              {error && <Error>{error} </Error>}
  
              <InputSubmit 
                type="submit"
                value="Iniciar Sesión"
              />
          </Formulario>
        </>
      </Layout>
    </div>
  )
}

export default Login