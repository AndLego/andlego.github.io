import style from "./Intro.module.css"
import ScrollBtn from "../ScrollBtn/ScrollBtn"

const Intro = () => {
    return (
        <section className={style.hero}>
            <div className={style.imgContainer}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
                <div className={style.circle3}></div>
                <img src="https://i.postimg.cc/G3TP2WPZ/Default-Balance-of-rocks-but-with-only-cubes-just-one-tower-ma-0-c9daca37-ff4e-4135-b483-97740e593d7.png" alt="tower" />
            </div>
            <article>
                <h1>Full Stack Developer</h1>
                <h2>Think. Make. Solve.</h2>
                <p>I am <span>Andres Leon</span>. Developer since 2021.
                </p>
                <p>Please feel free to explore my site and see my work for yourself.</p>

                <ScrollBtn />

            </article>

        </section>
    );
}

export default Intro;