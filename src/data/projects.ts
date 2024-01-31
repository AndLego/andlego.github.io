type ProjectCategory = "Misc" | "Front End" | "Back End" | "Full Stack";

interface Project {
    id: number,
    name: string,
    live: string,
    repository: string,
    image: string,
    description: string,
    category: ProjectCategory
}

const projects: Project[] = [
    {
        id: 0,
        name: 'Hit the Bear',
        live: 'https://andlego.github.io/bear-animation/',
        repository: 'https://github.com/AndLego/bear-animation',
        image: 'https://i.postimg.cc/zXKny4DL/hit-the-bear.png',
        description:
            'With this simple and small game i was able to practice and learn about CSS animations, and how to handle variables using CSS',
        category: "Misc"
    },
    {
        id: 1,
        name: 'Space Portfolio',
        live: 'https://andlego.github.io/space-portfolio/',
        repository: 'https://github.com/AndLego/space-portfolio',
        image: 'https://i.postimg.cc/k483RCfn/portfolio2.png',
        description:
            'Exploring Vite and practicing some effects of Framer Motion package this has been a fun project for exploring',
        category: "Misc"
    },
    {
        id: 2,
        name: 'GraphQl-Contacts',
        live: 'https://main--starlit-naiad-1e19a2.netlify.app/',
        repository: 'https://github.com/AndLego/chat-app',
        image: 'https://i.postimg.cc/5yTB1tP2/graphql-learn.png',
        description:
            'The objective here was to learn GraphQL, some mongoDB, and how to mix it with React; Here you can add contacts, modify, and delete them. Create an user and enjoy',
        category: "Back End"
    },
    {
        id: 3,
        name: 'Timer-Pomodoro',
        live: 'https://resilient-creponne-64a7fe.netlify.app/',
        repository: 'https://github.com/AndLego/TimerWithJS',
        image: 'https://i.postimg.cc/hGDRzVTG/timer.png',
        description:
            'Using Vainilla JavaScript i made this Pomodoro, Timer, and Chronometer',
        category: "Misc"
    },
    {
        id: 4,
        name: 'MovieDB',
        live: 'https://andlego.github.io/moviesDB/',
        repository: 'https://github.com/AndLego/moviesDB',
        image: 'https://i.postimg.cc/02DxKkMb/moviesdb.png',
        description:
            'Movie web-app connected to themoviedb API, where you can browse trending movies and tv shows. Also with feature of saving your favorites',
        category: "Front End"
    },
    {
        id: 5,
        name: 'To-Do-List',
        live: 'https://andlego.github.io/react-to-do/',
        repository: 'https://github.com/AndLego/react-to-do',
        image: 'https://i.postimg.cc/5NzhsHqn/to-do-list.png',
        description:
            'Project created using React and LocalStorage. Used as practice for learning JS frameworks.',
        category: "Front End"
    },
    {
        id: 6,
        name: 'Pokemon Wordle',
        live: 'https://andlego.github.io/PokemonWordle/',
        repository: 'https://github.com/AndLego/PokemonWordle',
        image: 'https://i.postimg.cc/0Qg5BgKw/wordle-poke.png',
        description:
            'Based on the famous wordle game, this is pokemon wordle. You can choose the length/difficult at start, and start guessing the pokemon. This was made using just JS and pokemon API.',
        category: "Front End"
    },
    {
        id: 7,
        name: 'Weather-App',
        live: 'https://extraordinary-hummingbird-bc2e15.netlify.app/',
        repository: 'https://github.com/AndLego/weather-app',
        image: 'https://i.postimg.cc/2j0RqRj7/weather-app.png',
        description:
            'Made with React.js. Fetching openweathermap.org API. You can search for any city or country. Create a list of places and check on them weather query.',
        category: "Front End"
    },
    {
        id: 8,
        name: 'Chat-App',
        live: 'https://main--friendly-babka-79adc1.netlify.app/',
        repository: 'https://github.com/AndLego/chat-app',
        image: 'https://i.postimg.cc/J45VHLBD/chat-app.png',
        description:
            'This chat app made for mobile version using socket.io, node.js and React.js. Back-end deployed with Heroku. Choose a channel, nickname and you can start chatting.',
        category: "Full Stack"
    },
    {
        id: 9,
        name: 'Flip-Rick',
        live: 'https://splendid-kataifi-dc6e72.netlify.app/',
        repository: 'https://github.com/AndLego/flip-rick',
        image: 'https://i.postimg.cc/Kv4trxZc/rick-flip.png',
        description:
            'Using React and Javascript I made this classic card flip game with Rick & Morty characters. Every new game makes a new call to Rick&Morty Api in order to randomize the cards',
        category: "Front End"
    },
    {
        id: 10,
        name: 'Jibaro Restaurant',
        live: 'https://tiny-custard-3a7cff.netlify.app/',
        repository: 'https://github.com/AndLego/jibaron',
        image: 'https://i.postimg.cc/k42bzsYv/jibaron.png',
        description:
            'Full stack app using Reactjs, Firebase, Framer motion, css. This projects allows the user to add new items and to maintain all the things over the firestore database',
        category: "Front End"
    },
    {
        id: 11,
        name: 'Cardanni',
        live: 'https://cardanni.netlify.app/',
        repository: 'https://github.com/AndLego/cardani',
        image: 'https://i.ibb.co/jT3sPws/cardanni-front.png',
        description:
            'Web Page for a bakery called Cardanni, carrousel for events on landing, menu with beatiful design, working cart that sends the buying list to the bakery whatsapp.',
        category: "Front End"
    },
    {
        id: 12,
        name: 'Portfolio-v3-Idea',
        live: 'https://main--tourmaline-elf-18e57f.netlify.app/',
        repository: 'https://github.com/AndLego/portafolio-v3',
        image: 'https://i.ibb.co/7zTfbxz/portfolio-v3.png',
        description:
            'Single Page App for a portfolio with a parallax animation on the background, And working email form to user.',
        category: "Front End"
    },
    {
        id: 13,
        name: 'Blog',
        live: 'https://blog-ts.netlify.app/',
        repository: 'https://github.com/AndLego/blog-ts',
        image: 'https://i.postimg.cc/m28Nj1Sw/blog.png',
        description:
            'Full CRUD project. Create your username, and posts. Edit them, comment or delete if you want.',
        category: "Full Stack"
    }
]


export { projects };