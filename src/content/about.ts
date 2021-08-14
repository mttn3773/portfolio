interface ITrait {
  name: string;
  items: string[];
  img: string;
}

const IMAGES_FOLDER = `${process.env.PUBLIC_URL}/traits-images`;

const TRAITS: ITrait[] = [
  {
    name: "Frontend",
    items: [
      "HTML | CSS",
      "Создание отзывчивых и быстрых SPA на базе React",
      "Обеспечение взаимодействия с серверной частью приложения",
      "Работа с анимациями",
      "Работа с SVG",
    ],
    img: `${IMAGES_FOLDER}/frontend.svg`,
  },
  {
    name: "Backend",
    items: [
      "Разработка API на базе NodeJS",
      "Обеспечение взаимодействия с базой данных",
      "Понимание приципов REST API / GraphQL",
      "Работа с фреймворками (Express, NestJS)",
    ],
    img: `${IMAGES_FOLDER}/backend.svg`,
  },
  {
    name: "Databse",
    items: [
      "SQL",
      "Работа с реляционными (PostgreSQL, MySQL) и нереляционными (MongoDB) базами данных ",
      "Работа с ORM-библиотеками",
    ],
    img: `${IMAGES_FOLDER}/db.svg`,
  },
];

export const ABOUT = {
  traits: TRAITS,
  text: `
  Меня зовут Никита, мне 23 года. В 2020 году я начал обучатся web-разработке.
  В процессе обучения я освоил основные принципы программирования и архитектуры web-приложений, 
  научился разрабатывать API, создавать и модифицировать базы данных и обеспечивать их взаимодействие 
  с сервером. Помимо этого, освоил навыки frontend-разработки, такие как: верстка сайта с помощью
  HTML и CSS, UI/UX дизайн, обеспечение взаимодействия клиентской части с сервером. 
  В качестве основного языка прграммирования я выбрал JavaScript/TypeScript,
  также иногда пишу на Python и владею навыками SQL.
   `,
};
