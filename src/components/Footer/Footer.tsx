import React, { FormEvent } from "react";
import style from "./Footer.module.css"
import Map from "./Map/Map"
import emailjs from '@emailjs/browser';

const Footer = () => {

    const [success, setSuccess] = React.useState(false)
    const [hide, setHide] = React.useState(false)
    const [loading, setLoading] = React.useState(false);
    const ref = React.useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            if (ref.current) {
                const result = await emailjs.sendForm('service_mbuj46q', 'template_9dpo8sa', ref.current, '5hrYs6EDaOtWnu2XP');
                console.log(result.text);
                setSuccess(true);
                setHide(true);
            }
        } catch (error: any) {
            console.error(error.text);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={style.contact}>
            <article className={style.left}>
                {
                    !hide && !loading &&
                    <form ref={ref} onSubmit={handleSubmit}>
                        <h2>Contact Me</h2>
                        <input required placeholder='Name' type="text" name="name" />
                        <input required placeholder='Email' type="email" name="email" />
                        <textarea required placeholder='Write your message' name="message" id="" rows={10}></textarea>
                        <button type='submit'>Send</button>
                        <div>
                            <p>Living, learning, & leveling up one day at a time.</p>
                            <p>Made with Love in 2023!</p>
                        </div>
                    </form>
                }
                {loading && <p>Loading...</p>}
                {
                    success && hide && !loading &&
                    <div className={style.afterMessage}>
                        <p>
                            Your message has been sent. I'll get back to you soon :)
                        </p>
                        <button onClick={() => setHide(false)}>Send another one</button>
                    </div>
                }

                {
                    !success && hide && !loading && (
                        <div className={style.afterMessage}>
                            <p>
                                Oops, somethng went wrong. x_X
                            </p>
                            <button onClick={() => setHide(false)}>Try again</button>
                        </div>
                    )}

            </article>
            <article className={style.right}>
                <Map />
            </article>
        </section>

    );
}

export default Footer;