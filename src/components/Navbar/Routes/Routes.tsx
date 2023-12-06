import { NavLink } from "react-router-dom"
import style from "../Navbar.module.css"

const Routes = ({ mobile, toggleMenu }: { mobile: string, toggleMenu?: () => void }) => {
    return (
        <ul className={`${mobile === "desktop" ? style.desktop : style.mobile}`}>
            {
                rutas.map((ruta) => (
                    <NavLink key={ruta.id}
                        to={ruta.to}
                        className={style.navBtns}
                        onClick={toggleMenu}
                        style={({ isActive }) => (
                            mobile === "desktop" ? (
                                {
                                    color: isActive ? "var(--resalto)" : "var(--blanco)",
                                    fontWeight: isActive ? "600" : "100"
                                }
                            ) :
                                (
                                    {
                                        color: isActive ? "var(--negro-lv1)" : "var(--blanco)",
                                        fontWeight: isActive ? "600" : "100"
                                    }
                                )
                        )}
                    >
                        {ruta.ruta}
                    </NavLink>
                ))
            }
        </ul>
    );
}

export default Routes;


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
]

interface Ruta {
    id: number,
    to: string,
    ruta: string
}