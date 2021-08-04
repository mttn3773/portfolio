import { SECTIONS } from "./sections";

interface ILinkItem {
  name: string;
  to: SECTIONS;
}

export const LINKS: ILinkItem[] = [
  { name: "Обо мне", to: SECTIONS.about },
  { name: "Технологии", to: SECTIONS.technologies },
  { name: "Проекты", to: SECTIONS.projects },
  { name: "Контакты", to: SECTIONS.contacts },
];
