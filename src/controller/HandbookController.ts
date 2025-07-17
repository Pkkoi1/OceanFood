import { handbookArticles, type HandbookArticle } from "../data/handbookData";

/**
 * Search handbook articles by title.
 * @param title - The title or partial title to search for.
 * @returns An array of matching handbook articles.
 */
export const searchHandbookByTitle = (title: string): HandbookArticle[] => {
  const lowerCaseTitle = title.toLowerCase();
  return handbookArticles.filter((article) =>
    article.title.toLowerCase().includes(lowerCaseTitle)
  );
};

/**
 * Get handbook article by ID.
 * @param id - The ID of the handbook article.
 * @returns The handbook article or undefined if not found.
 */
export const getHandbookById = (id: number): HandbookArticle | undefined => {
  return handbookArticles.find((article) => article.id === id);
};
