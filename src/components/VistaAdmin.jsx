import React from "react";
import { db, functions } from "../firebase.js";

const VistaAdmin = () => {
  const [usuarios, setusuarios] = React.useState([]);

  React.useEffect(() => {
    fetchUsuarios();
  }, []);


  const fetchUsuarios = async() =>{
      try {
          
       const res = await db.collection('usuarios').get()
       const arrayUsuarios = res.docs.map(doc => doc.data())
       setusuarios(arrayUsuarios)


      } catch (error) {
          console.log(error)
      }
  }


  const administrador = (email) => {
      if(!email.trim()){
          return console.log('email vacio')
      }

    const agregarRol= functions.httpsCallable('agregarAdministrador')
     agregarRol({email: email})
         .then(res => {
             console.log(res)
             if (res.data.error){
                 return console.log(' no tiene permisos')
             }

             db.collection('usuarios').doc(email).update({rol: 'admin'})
                    .then(user => {
                        console.log('usuario modificado a rol admin')
                        fetchUsuarios();
                    })
            })
  }

  const crearAutor = email => {
    const agregarRol= functions.httpsCallable('agregarAutor')
    agregarRol({email: email})
    .then(res => {
        console.log(res)
        if (res.data.error){
            return console.log(' no tiene permisos')
        }

        db.collection('usuarios').doc(email).update({rol: 'autor'})
               .then(user => {
                   console.log('usuario modificado a rol autor')
                   fetchUsuarios();
               })
       })

}

const eliminarAutor = (email) => {
    if(!email.trim()){
        console.log('email vacio')
        return
    }
    const agregarRol = functions.httpsCallable('eliminarAutor');
    
    agregarRol({email: email})
        .then(res => {
            console.log(res)
            if(res.data.error){
                return console.log('no está autorizado')
            }
            db.collection('usuarios').doc(email).update({rol: 'invitado'})
                .then(res => {
                console.log('usuario invitado actualizado')
                fetchUsuarios();
            })
        })
        .catch(error => console.log(error))
    }

    const eliminarAdministrador = (email) => {
        if(!email.trim()){
            console.log('email vacio')
            return
        }
        const agregarRol = functions.httpsCallable('eliminarAdministrador');
        
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    return console.log('no está autorizado')
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'}).then(res => {
                    console.log('usuario invitado actualizado')
                    fetchUsuarios();
                })
            })
            .catch(error => console.log(error))

        
    }

  return ( 
      <div>
           <h3>Administracion de usuarios</h3>
           {
               usuarios.map(usuario =>(
                   <div key={usuario.uid} className='mb-2'>
                       {usuario.email} - rol: {usuario.rol}
                       {
                        usuario.rol === 'admin' ? (
                            <button className="btn btn-danger btn-sm mx-2" onClick={() => eliminarAdministrador(usuario.email)}>Eliminar Admin</button>
                        ) : (
                            <>
                            <button 
                            className='btn btn-dark mx-2'
                            onClick={() => administrador (usuario.email)}
                            >
                            Administrador</button>
                            <button 
                            className='btn btn-success mx-2'
                            onClick={() => crearAutor (usuario.email)}
                            >
                            Autor</button>
                            <button 
                            className='btn btn-info mx-2'
                            onClick={() => eliminarAutor (usuario.email)}
                            >
                            Invitado</button>
                            </>
                        )
                       }
                      
                   </div>
               ))
           }
      </div>
      
      )
};

export default VistaAdmin;
