import NextBtn from "../NextBtn/NextBtn";
import style from "./About.module.css"

const About = () => {
    return (
        <section className={style.about}>
            <div>Take a moment and learn my background.</div>
            <figure className={style.avatarContainer}>
                <img className={style.head} src="https://i.postimg.cc/Jz88JLwz/cabeza-removebg-preview.png" alt="head" />
                <div className={style.overflowBody}>
                    <img className={style.body} src="https://i.postimg.cc/Nf6qQzyq/peeps-avatar-removebg-preview.png" alt="body" />
                </div>
            </figure>
            <article>
                <h1 id="/about">About Me</h1>
                <p>Over the past year, I have taken courses on platforms such as Platzi, Udemy, and Coursera to expand my knowledge of web development. I have also actively practiced coding by participating in coding challenges on LeetCode, CodeWars, and Advent of Code.</p>

                <p>As a web developer, I am constantly learning and seeking out new challenges. I am driven by a passion for problem-solving and a desire to create high-quality, user-friendly websites that help businesses succeed. I believe that my dedication to learning and my willingness to tackle difficult problems make me a valuable asset to any development team.</p>

                <p>When I'm not coding, you can find me exploring the outdoors or enjoying indoors with my dog. I also enjoy watching live streaming, movies and anime.</p>
                <NextBtn num={3} texto="Keep Going!" />
            </article>

        </section>
    );
}

export default About;