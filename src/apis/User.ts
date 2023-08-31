import axios from 'axios';

const endpoint = "http://localhost:3001/auth";
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyNzE3MzA2fQ.qAtw-HOAwHEf0b1biWCo7oltu35UDkI_T-HjrnTNWZU"

export const getUserById = async (userId: number) => {
  try {
    const response = await axios.get(`${endpoint}/${userId}`);
    console.log('response', response)
    if (!response.data) {
      return null;
    }
    
    return response.data;
  } catch (error) {
    return null;
  }
};
