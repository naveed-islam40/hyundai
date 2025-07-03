import axios from 'axios';
import { buildUrl } from '../config/apiConfig';

export interface OpportunityData {
  opportunityId: number;
  estimatesId?: number;
  repairOrderNumber?: string | null;
  locationId: number;
  dataSourceId: number;
  active: boolean;
  archived: boolean;
  userId: string;
  location?: any;
  opportunityDetail?: any;
  opportunityInsurance?: any;
  customerOpportunities?: any[];
  vehicle?: any;
  adjuster?: any;
  createdByUser?: any;
  notes?: any[];
  createdBy?: string;
  createdDate?: string;
  appointment?: any;
  numberOfContacts?: number;
  numberOfContactsPerDay?: number;
}

export const hyperdriveService = {
  authenticate: async () => {
    try {
      const response = await axios.post(buildUrl.hyperdriveAuthenticate());
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  testEndpoints: async () => {
    try {
      const response = await axios.get(`${buildUrl.hyperdriveAuthenticate().replace('/hyperdrive/authenticate', '')}/hyperdrive/test-endpoints`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createOpportunity: async (opportunityData: OpportunityData) => {
    try {
      const response = await axios.post(`${buildUrl.hyperdriveAuthenticate().replace('/hyperdrive/authenticate', '')}/hyperdrive/create-opportunity`, opportunityData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};