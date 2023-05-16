import React from 'react';
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import Routes from './Routes/Routes';

const Navbar = () => {
    // efecto sticky al scroll
    const [isSticky, setIsSticky] = React.useState(false);
    const navbarRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            const navbar = navbarRef.current;
            const sticky = navbar?.offsetTop || 0;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            setIsSticky(scrollTop >= sticky);

            if (scrollTop <= 0) {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${style.nav} ${isSticky ? style.scrolled : ''}`}>
            <Link to="/">
                <h1>AndLego</h1>
            </Link>

            <Routes mobile={"desktop"} />

        </nav >
    );
}

export default Navbar;
