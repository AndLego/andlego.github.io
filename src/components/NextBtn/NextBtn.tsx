import { Link } from 'react-scroll';
import style from "./NextBtn.module.css"

const NextBtn = ({ num, texto }: { num: number; texto: string }) => {
    return (
        <Link to={`seccion${num}`} smooth={true} duration={500} className={style.NextBtn}>
            {texto}
        </Link>
    );
}

export default NextBtn;