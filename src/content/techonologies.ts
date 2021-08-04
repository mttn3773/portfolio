export interface ITechnologyItem {
  name: string;
  icon: string;
  url: string;
}
export interface ITechnologies {
  frontend: ITechnologyItem[];
  backend: ITechnologyItem[];
}
const ICONS_FOLDER = `${process.env.PUBLIC_URL}/tech-icons`;
export const TECHNOLOGIES: ITechnologies = {
  frontend: [
    {
      name: "Javascript ES6",
      icon: `${ICONS_FOLDER}/javascript-icon.svg`,
      url: "https://learn.javascript.ru/",
    },
    {
      name: "HTML 5",
      icon: `${ICONS_FOLDER}/html-icon.svg`,
      url: "http://htmlbook.ru/html5",
    },
    {
      name: "CSS 3",
      icon: `${ICONS_FOLDER}/css-icon.svg`,
      url: "http://htmlbook.ru/css3",
    },
    {
      name: "Typescript",
      icon: `${ICONS_FOLDER}/typescript-icon.svg`,
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "React",
      icon: `${ICONS_FOLDER}/react-icon.svg`,
      url: "https://ru.reactjs.org/",
    },
    {
      name: "React Router",
      icon: `${ICONS_FOLDER}/react-router-icon.png`,
      url: "https://reactrouter.com/",
    },
    {
      name: "NextJS",
      icon: `${ICONS_FOLDER}/nextjs-icon.svg`,
      url: "https://nextjs.org/",
    },
    {
      name: "Redux",
      icon: `${ICONS_FOLDER}/redux-icon.svg`,
      url: "https://redux.js.org/",
    },
    {
      name: "Redux-Saga",
      icon: `${ICONS_FOLDER}/redux-saga-icon.png`,
      url: "https://redux-saga.js.org/docs/introduction/GettingStarted",
    },
    {
      name: "MobX",
      icon: `${ICONS_FOLDER}/mobx-icon.png`,
      url: "https://mobx.js.org/README.html",
    },
    {
      name: "SASS",
      icon: `${ICONS_FOLDER}/sass-icon.svg`,
      url: "https://sass-lang.com/",
    },
    {
      name: "Chakra UI",
      icon: `${ICONS_FOLDER}/chakra-ui-icon.svg`,
      url: "https://chakra-ui.com",
    },
    {
      name: "Bootstrap",
      icon: `${ICONS_FOLDER}/bootstrap-icon.svg`,
      url: "https://getbootstrap.com/",
    },
    {
      name: "Tailwind CSS",
      icon: `${ICONS_FOLDER}/tailwind-icon.svg`,
      url: "https://tailwindcss.com/",
    },
    {
      name: "GSAP",
      icon: `${ICONS_FOLDER}/gsap-icon.png`,
      url: "https://greensock.com/gsap/",
    },
    {
      name: "Styled Components",
      icon: `${ICONS_FOLDER}/styled-components-icon.png`,
      url: "https://styled-components.com/",
    },
    {
      name: "Formik",
      icon: `${ICONS_FOLDER}/formik-icon.png`,
      url: "https://formik.org/docs/overview",
    },
  ],
  backend: [
    {
      name: "Javascript ES6",
      icon: `${ICONS_FOLDER}/javascript-icon.svg`,
      url: "https://learn.javascript.ru/",
    },
    {
      name: "Typescript",
      icon: `${ICONS_FOLDER}/typescript-icon.svg`,
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "NodeJS",
      icon: `${ICONS_FOLDER}/nodejs-icon.svg`,
      url: "https://nodejs.org/en/",
    },
    {
      name: "Git",
      icon: `${ICONS_FOLDER}/git-icon.svg`,
      url: "https://git-scm.com/",
    },
    {
      name: "Express",
      icon: `${ICONS_FOLDER}/express-icon.png`,
      url: "https://expressjs.com/ru/",
    },
    {
      name: "NestJS",
      icon: `${ICONS_FOLDER}/nestjs-icon.svg`,
      url: "https://nestjs.com/",
    },
    {
      name: "Jest",
      icon: `${ICONS_FOLDER}/jest-icon.svg`,
      url: "https://jestjs.io/ru/",
    },
    {
      name: "SQL",
      icon: `${ICONS_FOLDER}/sql-icon.svg`,
      url: "https://www.sql.ru/",
    },
    {
      name: "MongoDB",
      icon: `${ICONS_FOLDER}/mongodb-icon.svg`,
      url: "https://www.mongodb.com/",
    },
    {
      name: "Mongoose",
      icon: `${ICONS_FOLDER}/mongoose-icon.svg`,
      url: "https://mongoosejs.com/docs/api.html",
    },
    {
      name: "PostgreSQL",
      icon: `${ICONS_FOLDER}/postgresql-icon.svg`,
      url: "https://www.postgresql.org/",
    },
    {
      name: "TypeORM",
      icon: `${ICONS_FOLDER}/typeorm-icon.png`,
      url: "https://typeorm.io/#/",
    },
    {
      name: "MikroORM",
      icon: `${ICONS_FOLDER}/mikro-orm-icon.svg`,
      url: "https://mikro-orm.io/",
    },
    {
      name: "Redis",
      icon: `${ICONS_FOLDER}/redis-icon.svg`,
      url: "https://redis.io/",
    },
    {
      name: "Socket.io",
      icon: `${ICONS_FOLDER}/socket-io-icon.svg`,
      url: "https://socket.io/",
    },
    {
      name: "Passport.js",
      icon: `${ICONS_FOLDER}/passport-icon.svg`,
      url: "http://www.passportjs.org/",
    },
    {
      name: "GraphQL",
      icon: `${ICONS_FOLDER}/graphql-icon.svg`,
      url: "https://graphql.org/",
    },
    {
      name: "TypeGraphQL",
      icon: `${ICONS_FOLDER}/typegraphql-icon.png`,
      url: "https://typegraphql.com/",
    },
    {
      name: "Apollo Server",
      icon: `${ICONS_FOLDER}/apollo-server-icon.png`,
      url: "https://www.apollographql.com/docs/apollo-server/",
    },
    {
      name: "Nodemailer",
      icon: `${ICONS_FOLDER}/nodemailer-icon.png`,
      url: "https://nodemailer.com/about/",
    },
  ],
};
