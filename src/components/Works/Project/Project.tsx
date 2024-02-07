import style from "./Project.module.css"
import { Link } from 'react-router-dom';
import { options } from './Data';
import Carrousel from './Carrousel/Carrousel';

const Project = ({ work }: { work: string }) => {
    /**call for component data */
    const data = options.find((item) => item.code === work)

    return (
        <article className={style.right}>
            <div className={style.imageContainer}>

                <Carrousel images={data?.images} />

                <div className={style.overlay}>
                </div>
                <div className={style.content}>
                    <h3>{data?.title}</h3>
                    <p>{data?.description}</p>
                    <Link to="/projects" className={style.linkTo}>
                        Vamos
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default Project;
