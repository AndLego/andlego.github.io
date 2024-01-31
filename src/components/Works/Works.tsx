import React from 'react';
import { CSSProperties } from 'react';
import style from "./Works.module.css"
import Restaurant_Interface from './Restaurant_Interface/Restaurant_Interface';
import Playlist_Creator from './Playlist_Creator/Playlist_Creator';
import Just_A_Blog from './Just_A_Blog/Just_A_Blog';
import Hobbies from './Hobbies/Hobbies';
import My_links from './My_links/My_links';
import Project from './Project/Project';

const data = [
    "Front End",
    "Back End",
    "Full Stack",
    "Hobbies",
    "Links"
]

interface ComponentMap {
    [key: string]: React.FC;
}

const componentMap: ComponentMap = {
    "Front End": Restaurant_Interface,
    "Back End": Playlist_Creator,
    "Full Stack": Project,
    "Hobbies": Hobbies,
    "Links": My_links
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
            <Project />
            {/* <article className={style.right}>
                <RenderComponent />
            </article> */}
        </section>
    );
}

export default Menu;