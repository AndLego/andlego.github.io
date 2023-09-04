import React from 'react';
import style from "./Playlist_Creator.module.css"
import { TbBrandCss3, TbBrandGraphql, TbBrandJavascript, TbBrandMongodb, TbBrandReact, TbBrandTypescript } from 'react-icons/tb';
import { DiNodejs } from 'react-icons/di';

const Technologies = () => {
    return (
        <>
            <h4 className={style.title}>Some of the skills I have developed while coding include:</h4>
            <ul className={style.tools}>
                <li className={style.itemWrapper}>
                    <div>
                        <TbBrandTypescript />
                        <p>TypeScript</p>
                    </div>
                </li>
                <li className={style.itemWrapper}>
                    <div>
                        <TbBrandReact />
                        <p>React</p>
                    </div>
                </li>
                <li className={style.itemWrapper}>
                    <div>
                        <TbBrandJavascript />
                        <p>JavaScript</p>
                    </div>
                </li>
                <li className={style.itemWrapper}>
                    <div>
                        <TbBrandCss3 />
                        <p>Css3</p>
                    </div>
                </li>
                <li className={style.itemWrapper}>
                    <div>
                        <TbBrandGraphql />
                        <p>GraphQl</p>
                    </div>
                </li>
                <li className={style.itemWrapper}>
                    <div>
                        <TbBrandMongodb />
                        <p>MongoDb</p>
                    </div>
                </li>
                <li className={style.itemWrapper}>
                    <div>
                        <DiNodejs />
                        <p>Node</p>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Technologies;