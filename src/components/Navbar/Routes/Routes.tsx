import { NavLink } from "react-router-dom"
import style from "../Navbar.module.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Routes = ({ mobile, toggleMenu }: { mobile: string, toggleMenu?: () => void }) => {
    return (
        <div className={`${mobile === "desktop" ? style.desktop : style.mobile}`}>
            <a href="https://www.linkedin.com/in/andlego" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://github.com/AndLego" target="_blank">
                <FaGithub />
            </a>

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
                                        color: isActive ? "Black" : "Black",
                                        fontWeight: isActive ? "600" : "100",
                                        fontSize: isActive ? "3.2rem" : "2rem"
                                    }
                                )
                        )}
                    >
                        {ruta.ruta}
                    </NavLink>
                ))
            }
        </div>
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