import style from "./Who.module.css"
import { Link } from "react-router-dom";

const Who = () => {
    return (
        <section className={style.who}>
            <div className={style.videoContainer}>
                <video
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="/bk_loop.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <article className={style.content}>
                <h1>Creating Awesomeness, Bug-Free Edition</h1>
                <div>
                    <div className={style.linea}></div>
                    <h2>Who I Am</h2>
                </div>
                <p>I'm a developer who is passionate about learning new technologies and applying them. I have developed multiple projects for almost 2 years and have enjoyed every piece of code on them.</p>

                <Link to="/projects" className={style.linkTo}>
                    Check my work
                </Link>
            </article>

        </section>
    );
}

export default Who;