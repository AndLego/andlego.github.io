import React from 'react';
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import Routes from './Routes/Routes';

const Navbar = () => {
    // efecto sticky al scroll


    return (
        <nav className={style.nav}>
            <Link to="/" className={style.logo_container}>
                <span className={style.logo}>AndLego</span>
                <span>the developer</span>
            </Link>

            <Routes mobile={"desktop"} />

        </nav >
    );
}

export default Navbar;
