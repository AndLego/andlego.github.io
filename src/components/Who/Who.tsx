import style from "./Who.module.css"

const Who = () => {
    return (
        <section className={style.who}>
            <div className={style.videoContainer}>
                <video
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="/bk_loop.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <article className={style.content}>
                <h2>Transformando Ideas en Experiencias Digitales</h2>
                <div>
                    <div className={style.linea}></div>
                    <h3>Quien Soy</h3>
                </div>
                <p>Como apasionado desarrollador, encuentro mi impulso en la constante búsqueda de nuevas tecnologías. Cada descubrimiento se convierte en una oportunidad emocionante para aplicar soluciones innovadoras en cada proyecto, construyendo así un repertorio diverso y actualizado. Dentro de mi Stack: Html, CSS, Javascript, React, Typescript, NodeJs, MongoDb, GraphQl</p>

            </article>

        </section>
    );
}

export default Who;