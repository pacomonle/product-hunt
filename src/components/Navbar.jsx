import React from 'react'

import {UsuarioContext} from '../context/UsuarioProvider'
import { auth } from 'firebase'

const Navbar = () => {

const {usuario, setusuario, iniciarSesion, cerrarSesion} = React.useContext(UsuarioContext)

React.useEffect(() => {

    detectarUsuario()
}, [])

const detectarUsuario = () =>{
    auth().onAuthStateChanged(user => {
        if(user){
           //console.log(user)
          user.getIdTokenResult()
            .then(idTokenResult =>{
                console.log(idTokenResult)
                if(!!idTokenResult.claims.admin){
                    console.log('es admin')
                    setusuario({
                        email: user.email,
                        uid: user.uid,
                        activo: true,
                        rol: 'admin'

                    })
                }else if(!!idTokenResult.claims.autor){
                    console.log(idTokenResult.claims)
                    console.log('es autor')
                    setusuario({
                        email: user.email,
                        uid: user.uid,
                        activo: true,
                        rol: 'autor'

                    })
                }else{
                    console.log(idTokenResult.claims)
                    console.log('es invitado')
                    setusuario({
                        email: user.email,
                        uid: user.uid,
                        activo: true,
                        rol: 'invitado'
                    })
                }

            })
         }else{
             console.log(user)
             setusuario({
                email: null,
                uid: null,
                activo: false,
                rol: null
            })
         }
      }) 
} 

    return (
        <div className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <div>
                {
                    usuario.email ? (
                        <button className='btn btn-dark' onClick={cerrarSesion}>
                        Cerrar Sesion</button>
                    ) : (
                        <button className='btn btn-dark' onClick={iniciarSesion}>
                        Login</button>
                    )
                }    
                </div>
                <div>
                   <span className='text-light'>
                   {
                       usuario.email ? usuario.email : 'Invitado'
                   }
                   </span>
                </div>
            </div>
        </div>
      )


}

export default Navbar
