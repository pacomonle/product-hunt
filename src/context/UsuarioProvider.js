import React from 'react'
import { db, auth, firebase } from "../firebase";


export const UsuarioContext = React.createContext()

const UsuarioProvider = (props) => {

const dataUsuarioInicial= {
    emai: null,
    uid: null,
    activo: null
}

const [usuario, setusuario] = React.useState(dataUsuarioInicial)

const iniciarSesion = async () =>{
    try {
        
      const provider = new firebase.auth.GoogleAuthProvider()
      const res = await auth.signInWithPopup(provider)

      const existe = await db.collection('usuarios').doc(res.user.email).get()
      
      if(!existe.exists){
          await db.collection('usuarios').doc(res.user.email).set({
              uid: res.user.uid,
              email: res.user.email,
              rol: 'invitado'
          })
      }

    } catch (error) {
        console.log(error)
    }
}

const cerrarSesion = () => {
    auth.signOut()
}

    return (
        <UsuarioContext.Provider 
        value ={{
            usuario,
            setusuario,
            iniciarSesion,
            cerrarSesion
        }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider
