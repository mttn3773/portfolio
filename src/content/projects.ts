interface ITechnologies {
  frontend: string[];
  backend: string[];
}
export interface IProject {
  name: string;
  images: string[];
  liveDemoLink: string;
  codeLink: string;
  description: string;
  technologies: ITechnologies;
}

const IMAGES_FOLDER = `${process.env.PUBLIC_URL}/project-images`;

export const PROJECTS: IProject[] = [
  {
    name: "Chat App",
    liveDemoLink: "https://chat-app-1337.herokuapp.com/",
    codeLink: "https://github.com/mttn3773/chat_app",
    images: [`${IMAGES_FOLDER}/chat-app.jpg`],
    description:
      "Приложение предоставляющая пользователю возможность принимать и отправлять сообщения в режиме реального времени. Реализована возможность отправлять сообщения как в общие канналы, так и конкретному пользователю. Также в приложении реализована система аутентификации с возможностью верификации аккаунта и восстановлением пароля с помощью email",
    technologies: {
      frontend: [
        "Typescript",
        "React",
        "SASS",
        "React-Router",
        "Formik",
        "Socket.io-client",
      ],
      backend: [
        "Typescript",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "Typeorm",
        "Redis",
        "Socket.io",
        "Jest",
        "Supertest",
        "Passport",
      ],
    },
  },
  {
    name: "Ecommerce",
    liveDemoLink: "https://ecommerce-flax-tau.vercel.app/",
    codeLink: "https://github.com/mttn3773/ecommerce",
    images: [`${IMAGES_FOLDER}/ecommerce.jpg`],
    description:
      "Интернет-магазин на базе фреймворка NextJS и платежной системы Stripe. Реализован функционал корзины, система оплаты, взаимодействие платежной системы (Stripe) с сервером посредством вебхуков. Так же реализована система взаимодействия сервера с облачным хранилищем для загрузки и хранения файлов ",
    technologies: {
      frontend: ["Typescript", "NextJS", "SASS", "Chakra UI", "Formik"],
      backend: [
        "Typescript",
        "NodeJS",
        "Express",
        "Typeorm",
        "Redis",
        "MongoDB",
        "Mongoose",
      ],
    },
  },
  {
    name: "Organizer",
    liveDemoLink: "https://ecommerce-flax-tau.vercel.app/",
    codeLink: "https://github.com/mttn3773/ecommerce",
    images: [`${IMAGES_FOLDER}/organizer.jpg`],
    description:
      "Приложение-органайзер позволяющее пользователю делать заметки на определенные даты.",
    technologies: {
      frontend: [
        "Typescript",
        "React",
        "React-Router",
        "SASS",
        "Chakra UI",
        "Formik",
        "Moment JS",
      ],
      backend: ["Typescript", "MongoDB", "Mongoose"],
    },
  },
  {
    name: "Randomizer",
    liveDemoLink: "https://randomizer-chi.vercel.app/",
    codeLink: "https://github.com/mttn3773/randomizer",
    images: [`${IMAGES_FOLDER}/randomizer.jpg`],
    description:
      "Приложение предназначенное для определения случайного победителя из указанных пользователем лотов с определенным весом. ",
    technologies: {
      frontend: ["Typescript", "React", "SASS"],
      backend: [],
    },
  },
];
