import { Intro, Works, Who, Footer } from '../components';
import style from "./landing.module.css"

const Landing = () => {
    return (
        <div className={style.Container}>
            <Intro />
            <Who />
            <Works />
            <Footer />
        </div>
    );
}

export default Landing;