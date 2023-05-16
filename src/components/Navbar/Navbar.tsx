import React from 'react';
import { NavLink, Link } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
        console.log("holi")
    };

    return (
        <nav className={style.nav}>
            <Link to="/">
                <h1>AndLego</h1>
            </Link>
            <ul>
                {
                    rutas.map((ruta) => (
                        <NavLink key={ruta.id}
                            to={ruta.to}
                            style={({ isActive }) => ({
                                color: isActive ? "var(--azul-lv2)" : "var(--blanco)",
                                fontWeight: isActive ? "600" : "100"
                            })}
                        >
                            {ruta.ruta}

                        </NavLink>
                    ))
                }
                <button>Download CV</button>
            </ul>

            {/* burguer boton */}
            <button className={`${style.burguer} ${openMenu ? style.active : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            


        </nav >
    );
}

export default Navbar;

const rutas: Ruta[] = [
    {
        id: 1,
        to: "/",
        ruta: "home"
    },
    {
        id: 2,
        to: "/projects",
        ruta: "projects"
    },
    {
        id: 3,
        to: "/contact",
        ruta: "contact"
    },
]

interface Ruta {
    id: number,
    to: string,
    ruta: string
}