import React from 'react';
import { SiTypescript, SiJavascript, SiGraphql, SiMongodb } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa6";
import style from "./Left.module.css"

const Techs = () => {

    const elements = [
        <SiTypescript />,
        <SiJavascript />,
        <FaReact />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaNodeJs />,
        <SiMongodb />,
        <SiGraphql />
    ];

    const duplicate = [...elements, ...elements]

    return (
        <div className={style.container}>
            <div className={style.marquee}>
                {duplicate.map((element, index) => (
                    <div key={index} className={style.item}>
                        {element}
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Techs;