import React from 'react';
import style from "./Project.module.css"
import { Link } from 'react-router-dom';

const Project = () => {
    const links = [
        "https://i.postimg.cc/Kj9CyBWP/web-design-pic.jpg",
        "https://i.postimg.cc/9fJHtDPq/web-design-rest.jpg",
        "https://i.postimg.cc/667TqKwh/web-design-desk.jpg"]

    const [currentLinkIndex, setCurrentLinkIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [links.length]);

    return (
        <article className={style.right}>
            <div className={style.imageContainer}>
                {links.map((link, index) => (
                    <img
                        key={index}
                        src={link}
                        alt=""
                        className={index === currentLinkIndex ? '' : style.hidden}
                    />
                ))}
                <div className={style.overlay}>
                </div>
                <div className={style.content}>
                    <h3>Código Encantador</h3>
                    <p>Tejiendo magia digital, donde cada línea cuenta una historia visual </p>
                    <Link to="/projects" className={style.linkTo}>
                        Vamos
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default Project;
