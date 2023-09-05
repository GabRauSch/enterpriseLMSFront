import axios from "axios";

const endpoint = 'http://localhost:3001/segments'

export const getSegmentsByCompanyId = async (companyId: number) => {
    try {
      const response = await axios.get(`${endpoint}/${companyId}`);
      if (!response.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  };