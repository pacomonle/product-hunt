import React from 'react'
import Navbar from './components/Navbar'
import VistaAdmin from './components/VistaAdmin'
import AgregarLibros from './components/AgregarLibros';
import Libros from './components/Libros';


import {UsuarioContext} from './context/UsuarioProvider';




const App = () => {

const {usuario} = React.useContext(UsuarioContext)


    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
            {
                usuario.rol === 'admin' && <VistaAdmin></VistaAdmin>
            }
            {
              usuario.rol === 'autor' && <AgregarLibros></AgregarLibros>
            }
            </div>
           <Libros></Libros>
        </div>
    )
}

export default App
