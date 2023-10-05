export const FIRST_COLUMN_TITLES: { [index: string]: string } = {
  publish: "Издательство",
  issueYear: "Год издания",
  pages: "Страниц",
  cover: "Переплёт",
  format: "Формат",
} as const;

export const SECOND_COLUMN_TITLES: { [index: string]: string } = {
  categories: "Жанр",
  weight: "Вес",
  ISBN: "ISBN",
  producer: "Изготовитель",
} as const;
