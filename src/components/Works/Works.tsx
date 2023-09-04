import React from 'react';
import { CSSProperties } from 'react';
import style from "./Works.module.css"
import Restaurant_Interface from './Restaurant_Interface/Restaurant_Interface';
import Playlist_Creator from './Playlist_Creator/Playlist_Creator';
import Just_A_Blog from './Just_A_Blog/Just_A_Blog';
import Hobbies from './Hobbies/Hobbies';
import My_links from './My_links/My_links';

const data = [
    "Restaurant Manager",
    "Playlist Creator",
    "Just A Blog",
    "Hobbies",
    "My Links"
]

interface ComponentMap {
    [key: string]: React.FC;
}

const componentMap: ComponentMap = {
    "Restaurant Manager": Restaurant_Interface,
    "Playlist Creator": Playlist_Creator,
    "Just A Blog": Just_A_Blog,
    "Hobbies": Hobbies,
    "My Links": My_links
};

const Menu = () => {
    const [work, setWork] = React.useState("Restaurant Manager")
    const RenderComponent = componentMap[work];
    const [currentStyle, setCurrentStyle] = React.useState("Restaurant Manager")

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
            <article className={style.right}>
                <RenderComponent />
            </article>
        </section>
    );
}

export default Menu;