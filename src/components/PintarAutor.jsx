import React from 'react'
import {UsuarioContext} from '../context/UsuarioProvider'
import {LibrosContext} from '../context/LibrosProvider'
import {db} from '../firebase'

const PintarAutor = (props) => {

    const {usuario} = React.useContext(UsuarioContext)
    const {fetchLibros} = React.useContext(LibrosContext)

    const [autor, setAutor] = React.useState('')

  /**
   * 
   * const eliminarLibro = async() => {
   * 
   * try {
     const res = await db.collection('libros').doc(props.id).delete()
            
    console.log('libro eliminado')
    fetchLibros()
} catch (error) {
    console.log(error, 'no se ha podido eliminar el libro')
}
     
 }

   * 
   * 
   * 
   */


    const eliminarLibro = () => {
        db.collection('libros').doc(props.id).delete()
            .then(() => {
                console.log('libro eliminado')
                fetchLibros()
            })
            .catch(error => console.log(error))
    }

    React.useEffect(() => {
        fetchAutor()
        console.log('referencia', props.autor)
       
    }, [props.autor])

    const fetchAutor = async() =>{
        try {
         const res = await props.autor.get()
                console.log(res)
                setAutor(res.data().email)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
            <span> {autor}</span>
            {
                (autor === usuario.email || usuario.rol === 'admin') && (
                    <button className='btn btn-danger float-right' onClick={eliminarLibro}>Eliminar</button>
                )
            }
        </>
    )
}

export default PintarAutor