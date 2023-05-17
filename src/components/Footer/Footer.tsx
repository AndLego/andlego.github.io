import style from "./Footer.module.css"
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TbHandRock } from 'react-icons/tb';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div className={style.wave2}>
            </div>
            <div className={style.ContactMe}>
                <p>Interested in working together?</p>
                <Link to="/Contact">Contact me <TbHandRock /></Link>
            </div>
            <article className={style.Stats}>
                <h1>AndLego</h1>
                <p>Living, learning, & leveling up one day at a time.</p>
                <div>
                    <BsGithub />
                    <BsLinkedin />
                </div>
            </article>
            <span>Made with Love in 2023!</span>
        </footer>
    );
}

export default Footer;