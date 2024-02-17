import React from 'react';
import style from "../Right.module.css"

const Carrousel = ({ images = [] }: { images?: string[] }) => {
    /**code for image carrousel */
    const [currentLinkIndex, setCurrentLinkIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {images.map((link, index) => (
                <img
                    key={index}
                    src={link}
                    alt=""
                    className={index === currentLinkIndex ? '' : style.hidden}
                />
            ))}
        </>
    );
}

export default Carrousel;