interface Data {
    id: number,
    code: string,
    images: string[],
    title: string,
    description: string,
}

export const options: Data[] = [
    {
        id: 0,
        code: "Front End",
        images: [
            "https://i.postimg.cc/Kj9CyBWP/web-design-pic.jpg",
            "https://i.postimg.cc/9fJHtDPq/web-design-rest.jpg",
            "https://i.postimg.cc/667TqKwh/web-design-desk.jpg"
        ],
        title: "Código Encantador",
        description: "Tejiendo magia digital, donde cada línea cuenta una historia visual"
    },
    {
        id: 1,
        code: "Back End",
        images: [
            "https://i.postimg.cc/WbFdZMpY/back-end-world.jpg",
            "https://i.postimg.cc/hjtjtm3r/back-end-guy.jpg",
            "https://i.postimg.cc/HxNpWhMY/back-end-street.jpg"
        ],
        title: "Lógica Poderosa",
        description: "Construyendo soluciones detrás de escena, donde cada línea de código da forma a funcionalidades clave."
    },
    {
        id: 2,
        code: "Full Stack",
        images: [
            "https://i.postimg.cc/7PCz1vmN/Iceberg.jpg",
            "https://i.postimg.cc/bJ4sVJ39/Fs-represnt.jpg",
            "https://i.postimg.cc/h47JzLty/code-sky.jpg"
        ],
        title: "Conexión Integral",
        description: "Navegando entre lógica del servidor y diseño de interfaz, cada línea contribuye a experiencias integrales"
    }
]
