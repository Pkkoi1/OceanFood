import { HandbookAPI } from "../api/API";
import type { HandbookArticle } from "../data/handbookData";

export const fetchHandbook = async (): Promise<HandbookArticle[]> => {
  try {
    const handbook = await HandbookAPI.getHandbook();
    return handbook as HandbookArticle[]; // Ensure the data is cast to HandbookArticle[]
  } catch (error) {
    console.error("Error fetching handbook:", error);
    throw error;
  }
};

export const fetchHandbookById = async (
  id: string
): Promise<HandbookArticle> => {
  try {
    const handbook = await HandbookAPI.getHandbookById(id);
    return handbook as HandbookArticle; // Ensure the data is cast to HandbookArticle
  } catch (error) {
    console.error(`Error fetching handbook with ID ${id}:`, error);
    throw error;
  }
};
