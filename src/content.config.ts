interface ILinkItem {
  name: string;
  to: SECTIONS;
}
export interface ITechnologyItem {
  name: string;
  icon: string;
  url: string;
}
export interface ITechnologies {
  frontend: ITechnologyItem[];
  backend: ITechnologyItem[];
  others: ITechnologyItem[];
}
export enum SECTIONS {
  about = "about",
  technologies = "technologies",
  projects = "projects",
  contacts = "contacts",
}

export const TECHNOLOGIES: ITechnologies = {
  frontend: [
    {
      name: "React",
      icon: `${process.env.PUBLIC_URL}/tech-icons/react-icon.svg`,
      url: "https://ru.reactjs.org/",
    },
  ],
  backend: [
    {
      name: "Express",
      icon: `${process.env.PUBLIC_URL}/tech-icons/express-icon.png`,
      url: "https://expressjs.com/ru/",
    },
  ],
  others: [],
};

const LINKS: ILinkItem[] = [
  { name: "Обо мне", to: SECTIONS.about },
  { name: "Технологии", to: SECTIONS.technologies },
  { name: "Проекты", to: SECTIONS.projects },
  { name: "Контакты", to: SECTIONS.contacts },
];

export const CONFIG = {
  technologies: TECHNOLOGIES,
  links: LINKS,
};
