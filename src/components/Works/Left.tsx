import React from 'react';
import { CSSProperties } from 'react';
import style from "./Left.module.css"
import Project from './Right/Right';

const data = [
    "Front End",
    "Back End",
    "Full Stack",
]

interface ProjectProps {
    work: string;
}

interface ComponentMap {
    [key: string]: React.FC<ProjectProps>;
}

const componentMap: ComponentMap = {
    "Front End": Project,
    "Back End": Project,
    "Full Stack": Project,
};

const Menu = () => {
    const [work, setWork] = React.useState("Front End")
    const RenderComponent = componentMap[work];
    const [currentStyle, setCurrentStyle] = React.useState("Front End")

    const clickHandler = (item: string) => {
        setWork(item)
        setCurrentStyle(item)
    }

    return (
        <section className={style.works}>
            <article className={style.left}>
                <ul>
                    {data.map(item =>
                        <li
                            key={item}
                            style={{ '--item-content': `"${item}"` } as CSSProperties}
                            onClick={() => clickHandler(item)}
                            className={currentStyle === item ? style.currentStyle : ""}
                        >
                            {item}
                        </li>
                    )}
                </ul>
            </article>
            <RenderComponent work={work} />
        </section>
    );
}

export default Menu;