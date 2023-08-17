import style from "./Skills.module.css"
import { BsFillPaletteFill, BsFillFileBinaryFill } from 'react-icons/bs';
import { TbBrandCss3, TbBrandGraphql, TbBrandJavascript, TbBrandMongodb, TbBrandReact, TbBrandTypescript } from 'react-icons/tb';
import { FaHandshake } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Skills = () => {
    return (
        <section className={style.Skills}>
            <div id="seccion3" className={style.pointer}></div>
          
            <h1>What do I offer?</h1>
            <article className={style.cards}>
                <div>
                    <BsFillPaletteFill />
                    <h2>Create stunning web designs</h2>
                    <p>Discover how my web design skills can help bring your ideas to life. By utilizing principles of visual design, typography, and user experience, I can create attractive and functional designs that will captivate your users and enhance their experience on your website.</p>
                </div>
                <div>
                    <BsFillFileBinaryFill />
                    <h2>Transform your designs into real code</h2>
                    <p>Have amazing designs in mind? Let me help you turn your designs into functional and responsive code. Whether you provide sketches, mockups, or design files, I can transform them into an interactive and fully functional website using the latest web development technologies and best practices.</p>
                </div>
                <div>
                    <FaHandshake />
                    <h2>Responsible and dedicated collaboration</h2>
                    <p>I am committed to working on your projects in a responsible and dedicated manner. I can bring my technical skills and web development expertise to provide you with effective and high-quality solutions. I will work closely with you to understand your goals and requirements, and keep you informed about the project's progress to ensure a smooth and satisfying collaboration.</p>
                </div>
            </article>

            <h1>Tools and Technologies</h1>

            <article className={style.tools}>
                <div className={style.itemWrapper}>
                    <div>
                        <TbBrandTypescript />
                        <p>TypeScript</p>
                    </div>
                </div>
                <div className={style.itemWrapper}>
                    <div>
                        <TbBrandReact />
                        <p>React</p>
                    </div>
                </div>
                <div className={style.itemWrapper}>
                    <div>
                        <TbBrandJavascript />
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className={style.itemWrapper}>
                    <div>
                        <TbBrandCss3 />
                        <p>Css3</p>
                    </div>
                </div>
                <div className={style.itemWrapper}>
                    <div>
                        <TbBrandGraphql />
                        <p>GraphQl</p>
                    </div>
                </div>
                <div className={style.itemWrapper}>
                    <div>
                        <TbBrandMongodb />
                        <p>MongoDb</p>
                    </div>
                </div>
                <div className={style.itemWrapper}>
                    <div>
                        <DiNodejs />
                        <p>Node</p>
                    </div>
                </div>
            </article>

            <Link to="/projects">
                <div className={style.BtnProjects}>
                    Discover my projects come to life
                    <BsFillHeartPulseFill />
                </div>
            </Link>
        </section>
    );
}

export default Skills;