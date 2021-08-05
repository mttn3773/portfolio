interface ITechnologies {
  frontend: string[];
  backend: string[];
}
export interface IProject {
  name: string;
  images: string[];
  description: string;
  technologies: ITechnologies;
}

const IMAGES_FOLDER = `${process.env.PUBLIC_URL}/project-images`;

export const PROJECTS: IProject[] = [
  {
    name: "Chat App",
    images: [
      `${IMAGES_FOLDER}/chat-app/01.jpg`,
      `${IMAGES_FOLDER}/chat-app/02.jpg`,
      `${IMAGES_FOLDER}/chat-app/03.jpg`,
    ],
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
    name: "Chat App",
    images: [`${IMAGES_FOLDER}/chat-app/01.jpg`],
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
];
