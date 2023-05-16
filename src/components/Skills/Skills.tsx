import style from "./Skills.module.css"

const Skills = () => {
    return (
        <section className={style.Skills} id="seccion3">
            <div className={style.wave}>
                {/* <img className={style.wave} src="https://i.postimg.cc/2SJ8BmqJ/wave.png" alt="wave" /> */}
            </div>
            <h1>What do I offer?</h1>
            <article className={style.cards}>
                <div>
                    <h2>Create stunning web designs</h2>
                    <p>Discover how my web design skills can help bring your ideas to life. By utilizing principles of visual design, typography, and user experience, I can create attractive and functional designs that will captivate your users and enhance their experience on your website.</p>
                </div>
                <div>
                    <h2>Transform your designs into real code</h2>
                    <p>Have amazing designs in mind? Let me help you turn your designs into functional and responsive code. Whether you provide sketches, mockups, or design files, I can transform them into an interactive and fully functional website using the latest web development technologies and best practices.</p>
                </div>
                <div>
                    <h2>Responsible and dedicated collaboration</h2>
                    <p>I am committed to working on your projects in a responsible and dedicated manner. I can bring my technical skills and web development expertise to provide you with effective and high-quality solutions. I will work closely with you to understand your goals and requirements, and keep you informed about the project's progress to ensure a smooth and satisfying collaboration.</p>
                </div>
            </article>
        </section>
    );
}

export default Skills;