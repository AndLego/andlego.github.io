import { projects } from "../data/projects";
import { FiGithub } from 'react-icons/fi';
import { MdLiveTv } from 'react-icons/md';

import style from "./pages.module.css"

const Projects = () => {

    return (
        <section className={style.projects}>
            {projects.sort((a, b) => b.id - a.id).map((project) => (
                <article key={project.id} className={style.projectWrapper}>
                    <div className={style.card}>
                        <div className={style.front}>
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className={style.back}>
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                            <div className={style.links}>
                                <a target="_blank" href={project.live}><MdLiveTv />Live</a>
                                <a target="_blank" href={project.repository}><FiGithub />Code</a>
                            </div>
                        </div>
                    </div>
                </article>


            ))
            }
        </section >
    );
}

export default Projects;