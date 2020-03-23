import React from 'react'
import './Contact.css';

const Contact = () =>{
    return (
        <form>
            <legend>Formulario de contacto</legend>
            <div className='input-field'>
                <label>Nombre: </label>
                <input type='text' placeholder='Tu nombre' />
            </div>
            <div className='input-field'>
                <label>Email: </label>
                <input type='text' placeholder='Tu Email' />
            </div>
            <div className='input-field'>
                <label>Mensaje: </label>
                <textarea></textarea>
            </div>
            <div className='input-field send'>
                <input type='submit' value='Enviar'/>
            </div>
        </form>
    )
}

export default Contact;