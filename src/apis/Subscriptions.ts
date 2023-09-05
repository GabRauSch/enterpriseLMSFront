import axios from 'axios';

const endpoint = "http://localhost:3001/subscriptions";
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyNzE3MzA2fQ.qAtw-HOAwHEf0b1biWCo7oltu35UDkI_T-HjrnTNWZU"

export const getUserAquisitions = async (userId: number) => {
  try {
    const response = await axios.get(`${endpoint}/${userId}`, {
        headers: {
            Authorization: authorization
        }
    });
    if (!response.data) {
      return null;
    }
    
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
