import React from 'react';
import style from "./BurguerBtn.module.css"
import Routes from '../Routes/Routes';

const BurguerBtn = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className={style.burguerContainer}>
            <button className={`${style.burguer} ${openMenu ? style.active : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${style.bubble} ${openMenu ? style.open : style.close}`}>
                <Routes mobile={"mobile"} toggleMenu={toggleMenu} />
            </div>

        </div>
    );
}

export default BurguerBtn;