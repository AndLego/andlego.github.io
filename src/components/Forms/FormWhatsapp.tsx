import React from 'react';
import style from "./Form.module.css"
import { FiSend } from 'react-icons/fi';


const FormWhatsapp = () => {
    /**codigo para el formulario */
    const nombreRef = React.useRef<HTMLInputElement>(null);
    const correoRef = React.useRef<HTMLInputElement>(null);
    const telefonoRef = React.useRef<HTMLInputElement>(null);
    const mensajeRef = React.useRef<HTMLTextAreaElement>(null);

    const crearTextoPedido = () => {
        let mensaje = `Hi, my name is ${nombreRef.current?.value}. `;
        mensaje += `My email is ${correoRef.current?.value}. `;
        mensaje += `My phone is ${telefonoRef.current?.value}. `;
        mensaje += `I contact for: ${mensajeRef.current?.value}.`;

        return mensaje;
    };

    const enviarPedido = () => {
        const textoPedido = encodeURIComponent(crearTextoPedido());
        window.open(`https://wa.me/573016844548?text=${textoPedido}`, '_blank');
    };

    return (

        <form onSubmit={enviarPedido} className={style.form}>
            <label htmlFor="nombre">Name:</label>
            <input type="text" id="nombre" ref={nombreRef} required />

            <label htmlFor="correo">Email:</label>
            <input type="email" id="correo" ref={correoRef} required />

            <label htmlFor="telefono">Phone:</label>
            <input type="tel" id="telefono" ref={telefonoRef} required />

            <label htmlFor="mensaje">Message:</label>
            <textarea id="mensaje" ref={mensajeRef} required />

            <button type="submit">Send<FiSend /></button>
        </form>

    );
}

export default FormWhatsapp;