import style from "./Footer.module.css"
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TbHandRock } from 'react-icons/tb';
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation()

    console.log(location.pathname)

    return (
        <section className={style.Footer}>
            {location.pathname !== "/contact" &&
                <div className={style.ContactMe}>
                    <p>Interested in working together?</p>
                    <Link to="/contact">Contact me <TbHandRock /></Link>
                </div>
            }

            <article className={style.Stats}>
                <h1>AndLego</h1>
                <p>Living, learning, & leveling up one day at a time.</p>
                <div>
                    <a target="_blank" href="https://github.com/andlego">
                        <BsGithub />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/andlego">
                        <BsLinkedin />
                    </a>
                </div>
            </article>
            <span>Made with Love in 2023!</span>
        </section>
    );
}

export default Footer;