import React from 'react';
import style from "./Skills.module.css"

import { TbBrandCss3, TbBrandGraphql, TbBrandJavascript, TbBrandMongodb, TbBrandReact, TbBrandTypescript } from 'react-icons/tb';
import { DiNodejs } from 'react-icons/di';
import Eyes from './Eyes/Eyes';

const skillsData = [
    {
        id: 1,
        icon: <TbBrandTypescript />,
        label: 'TypeScript',
        className: style.box1,
    },
    {
        id: 2,
        icon: <div />,
        label: '',
        className: style.box2,
    },
    {
        id: 3,
        icon: <TbBrandReact />,
        label: 'React',
        className: style.box3,
    },
    // Agrega más datos según sea necesario
];

const Technologies = () => {
    const [isHovered, setIsHovered] = React.useState(null);

    const update = (e: any) => {
        var x = e.clientX || (e.touches && e.touches[0].clientX);
        var y = e.clientY || (e.touches && e.touches[0].clientY);

        // Establecer un retraso de 16 ms (aproximadamente 60 FPS)
        setTimeout(() => {
            document.documentElement.style.setProperty('--cursorX', x + 'px');
            document.documentElement.style.setProperty('--cursorY', y + 'px');
        }, 16);
    };

    React.useEffect(() => {
        document.addEventListener('mousemove', update);
        document.addEventListener('touchmove', update);

        return () => {
            document.removeEventListener('mousemove', update);
            document.removeEventListener('touchmove', update);
        };
    }, []);

    /**control de ojos */
    const handleMouseEnter = (id) => {
        setIsHovered(id);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    return (
        <section className={style.skills}>
            <h4 className={style.title}>Some of the skills I have developed while coding include:</h4>

            <div className={style.container}>

                {skillsData.map(({ id, icon, label, className }) => (
                    <div
                        key={id}
                        className={`${style.box} ${className}`}
                        onMouseEnter={() => handleMouseEnter(id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isHovered === id ? (
                            <>
                                {icon}
                                <p>{label}</p>
                            </>
                        ) : (
                            <Eyes />
                        )}
                    </div>
                ))}

                {/* <div
                    className={`${style.box} ${style.box1}`}
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    {isHovered === 1 ? (
                        <>
                            <TbBrandTypescript />
                            <p>TypeScript</p>
                        </>
                    ) : (
                        <>
                            <Eyes />
                        </>
                    )}
                </div>

                <div className={`${style.box} ${style.box2}`}>
                </div>

                <div className={`${style.box} ${style.box3}`}
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}>

                    {isHovered === 1 ? (
                        <>
                            <TbBrandReact />
                            <p>React</p>
                        </>
                    ) : (
                        <>
                            <Eyes />
                        </>
                    )}
                </div>
                <div className={`${style.box} ${style.box2}`}></div>

                <div className={`${style.box} ${style.box3}`}></div>

                <div className={`${style.box} ${style.box2}`}
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}>

                    {isHovered === 1 ? (
                        <>
                            <TbBrandJavascript />
                            <p>JavaScript</p>
                        </>
                    ) : (
                        <>
                            <Eyes />
                        </>
                    )}
                </div>

                <div className={`${style.box} ${style.box3}`}></div>

                <div className={`${style.box} ${style.box1}`}
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}>

                    {isHovered === 1 ? (
                        <>
                            <TbBrandCss3 />
                            <p>Css3</p>
                        </>
                    ) : (
                        <>
                            <Eyes />
                        </>
                    )}

                </div>

                <div className={`${style.box} ${style.box1}`}></div>

                <div className={`${style.box} ${style.box3}`}
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}>

                    {isHovered === 1 ? (
                        <>
                            <TbBrandGraphql />
                            <p>GraphQl</p>
                        </>
                    ) : (
                        <>
                            <Eyes />
                        </>
                    )}

                </div>

                <div className={`${style.box} ${style.box2}`}></div>

                <div className={`${style.box} ${style.box2}`}></div>

                <div className={`${style.box} ${style.box3}`}>
                    <TbBrandMongodb />
                    <p>MongoDb</p>
                </div>

                <div className={`${style.box} ${style.box2}`}></div>

                <div className={`${style.box} ${style.box1}`}>
                    <DiNodejs />
                    <p>Node</p>
                </div> */}

            </div>

        </section>
    );
}

export default Technologies;