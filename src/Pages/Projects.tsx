import { projects } from "../data/projects";
import { FiGithub } from 'react-icons/fi';
import { MdLiveTv } from 'react-icons/md';
import LazyImage from "../utils/LazyImage";

import style from "./projects.module.css"
import React from "react";

const categories = [
    {
        id: 0,
        value: "All"
    },
    {
        id: 1,
        value: "Front End"
    },
    {
        id: 2,
        value: "Back End"
    },
    {
        id: 3,
        value: "Full Stack"
    },
    {
        id: 4,
        value: "Misc"
    },
]

const Projects = () => {

    const [current, setCurrent] = React.useState("All")

    const filteredProjects = current === "All"
        ? projects
        : projects.filter(item => item.category === current)

    return (
        <div className={style.Container}>
            <div className={style.categories}>
                {categories.map((item) => (
                    <h3
                        className={item.value === current ? style.activeCategory : ""}
                        key={item.id}
                        onClick={() => setCurrent(item.value)}>
                        {item.value}

                    </h3>

                ))}
            </div>
            <section className={style.projects}>
                {filteredProjects.sort((a, b) => b.id - a.id).map((project) => (


                    <article key={project.id} className={style.projectWrapper}>
                        <div className={style.card}>
                            <div className={style.front}>
                                <LazyImage src={project.image} alt={project.name} />
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
        </div>
    );
}

export default Projects;