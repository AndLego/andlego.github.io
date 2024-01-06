import React from 'react';
import style from "./Project.module.css"

const Project = () => {
    const links = ["https://i.postimg.cc/m28Nj1Sw/blog.png", "https://i.ibb.co/7zTfbxz/portfolio-v3.png", "url3.img"]
    const [currentImg, setCurrentImg] = React.useState(links[1])
    return (
        <article className={style.right}>
            <div className={style.imageContainer}>
                <img src="https://i.ibb.co/7zTfbxz/portfolio-v3.png" alt="" />
                <div className={style.overlay}></div>
            </div>
        </article>
    );
}

export default Project;
