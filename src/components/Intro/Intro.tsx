import NextBtn from "../NextBtn/NextBtn.jsx"
import style from "./Intro.module.css"

const Intro = () => {
    return (
        <section className={style.hero}>
            <article>
                <h1>Web / Front End Developer</h1>
                <p>Welcome to my website! I'm <span>Andres Leon</span>, a self-taught web developer with over a year of experience.
                </p>
                <p>Please feel free to explore my site and see my work for yourself.</p>

                <div className={style.extra}>
                    <p>I have honed my skills in <span>Typescript</span>, <span>React</span>, <span>Javascript</span>, <span>Css</span> and <span>Html</span> to create beautiful and responsive websites.</p>
                    <p>My objective is to build engaging and user-friendly websites that help businesses achieve their goals. </p>
                </div>

                <NextBtn num={2} texto="Explore" />
            </article>
            <div id="seccion2" className={style.pointer}></div>
        </section>
    );
}

export default Intro;