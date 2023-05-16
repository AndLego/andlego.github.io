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

            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="par" ><path fill="currentColor" d="M845 606q-53 106-171.5 84t-190 30q-71.5 52-162 13.5t-139-136Q134 500 228 435.5T354 260q32-111 116-19t232.5 48q148.5-44 172 83.5T845 606Z" /></clipPath>
                    <path id="parb" fill="none" d="M845 606q-53 106-171.5 84t-190 30q-71.5 52-162 13.5t-139-136Q134 500 228 435.5T354 260q32-111 116-19t232.5 48q148.5-44 172 83.5T845 606Z" />
                </defs>

                <image
                    width="740"
                    height="740"
                    preserveAspectRatio="xMidYMid slice"
                    xlinkHref="https://i.postimg.cc/YStQTJQn/robot.jpg"
                    clipPath="url(#par)"
                    x="16%"
                    y="15%"
                />
                <use href="#parb" />
            </svg>

            <div id="seccion2" className={style.pointer}></div>
        </section>
    );
}

export default Intro;