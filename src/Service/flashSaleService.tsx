import { FlashSaleAPI } from "../api/API";

export const FlashSaleService = {
  fetchFlashSales: async () => {
    try {
      const response = await FlashSaleAPI.getFlashSales();
      console.log(
        "FlashSaleService.fetchFlashSales response (should be array):",
        response
      );
      return response; // Đảm bảo trả về mảng
    } catch (error) {
      console.error("Error in FlashSaleService.fetchFlashSales:", error);
      throw error;
    }
  },
  createFlashSale: async (flashSaleData: {
    product: string;
    startDate: string;
    endDate: string;
    discountPercentage: number;
  }) => {
    try {
      return await FlashSaleAPI.addFlashSale(flashSaleData);
    } catch (error) {
      console.error("Error in FlashSaleService.createFlashSale:", error);
      throw error;
    }
  },
  modifyFlashSale: async (
    id: string,
    updateData: {
      startDate?: string;
      endDate?: string;
      discountPercentage?: number;
    }
  ) => {
    try {
      return await FlashSaleAPI.updateFlashSale(id, updateData);
    } catch (error) {
      console.error("Error in FlashSaleService.modifyFlashSale:", error);
      throw error;
    }
  },
  removeFlashSale: async (id: string) => {
    try {
      return await FlashSaleAPI.deleteFlashSale(id);
    } catch (error) {
      console.error("Error in FlashSaleService.removeFlashSale:", error);
      throw error;
    }
  },
};
