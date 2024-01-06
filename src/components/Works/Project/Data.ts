interface Data {
    id: number,
    name: string,
    description: string,
    image: string,
    links: {
        live: string;
        code: string;
    }
}

export const mainProjects: Data[] = [
    {
        id: 0,
        name: "Restaurant POS",
        description: "working",
        image: "string",
        links: {
            live: "https://ejemplo.com/live",
            code: "https://github.com/ejemplo"
        }
    },
    {
        id: 1,
        name: "Playlist Creator",
        description: "working",
        image: "string",
        links: {
            live: "https://ejemplo.com/live",
            code: "https://github.com/ejemplo"
        }
    },
    {
        id: 2,
        name: "Just A Blog",
        description: "Full CRUD project. You can create users, posts, comments, edit or delete them. Made with TypeScript and firebase",
        image: "https://i.postimg.cc/m28Nj1Sw/blog.png",
        links: {
            live: "https://blog-ts.netlify.app/",
            code: "https://github.com/AndLego/blog-ts"
        }
    },
]
