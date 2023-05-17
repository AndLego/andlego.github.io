import { FormEmail, FormWhatsapp } from "../components";
import React from 'react';
import style from "./pages.module.css"
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    const [option, setOption] = React.useState(false)

    const toggleForm = () => {
        setOption(!option)
    }

    return (
        <section className={style.forms}>
            <h1>You can reach me via whatsapp or email</h1>
            <div className={style.options}>
                <p className={`${!option ? style.active : ""}`} onClick={toggleForm}><BsWhatsapp />WhatsApp</p>
                <p className={`${option ? style.active : ""}`} onClick={toggleForm}><AiOutlineMail />Email</p>
            </div>
            {!option ?
                <FormWhatsapp /> :
                <FormEmail />
            }
        </section>
    );
}

export default Contact;