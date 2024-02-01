import React from 'react';
import style from "./Project.module.css"
import { Link } from 'react-router-dom';

const Project = () => {
    const links = ["https://i.postimg.cc/Kj9CyBWP/web-design-pic.jpg", "https://i.postimg.cc/9fJHtDPq/web-design-rest.jpg", "https://i.postimg.cc/667TqKwh/web-design-desk.jpg"]
    const [currentImg, setCurrentImg] = React.useState(links[0])
    return (
        <article className={style.right}>
            <div className={style.imageContainer}>
                <img src="https://i.postimg.cc/9fJHtDPq/web-design-rest.jpg" alt="" />
                <div className={style.overlay}>
                    <p className={style.description}>Como desarrollador Front End disfruto desde la meticulosa planificación hasta la resolución de desafíos, el proceso es una danza entre creatividad y soluciones técnicas. Cada problema resuelto es una pequeña victoria, y el resultado final es una obra maestra digital que conecta, inspira y transforma. Es más que código; es la alquimia de construir experiencias en línea significativas.</p>

                    <Link to="/projects" className={style.linkTo}>
                        Go
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default Project;
