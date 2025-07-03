import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

export const vinService = {
  validateVIN: async (vin: string) => {
    try {
      const response = await axios.get(`${apiConfig.hyundaiBaseUrl}/vin/validate/${vin}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};