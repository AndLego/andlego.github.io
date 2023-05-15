import { NavLink, Link } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
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
        id: 1,
        to: "/contact",
        ruta: "contact"
    },
]

interface Ruta {
    id: number,
    to: string,
    ruta: string
}