interface ILinkItem {
  name: string;
  to: SECTIONS;
}
export enum SECTIONS {
  about = "about",
  technologies = "technologies",
  projects = "projects",
  contacts = "contacts",
}
const LINKS: ILinkItem[] = [
  { name: "Обо мне", to: SECTIONS.about },
  { name: "Технологии", to: SECTIONS.technologies },
  { name: "Проекты", to: SECTIONS.projects },
  { name: "Контакты", to: SECTIONS.contacts },
];

export const CONFIG = {
  links: LINKS,
};
