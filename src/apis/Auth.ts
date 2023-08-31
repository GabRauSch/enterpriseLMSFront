import axios from 'axios';
import Cookies from 'js-cookie'

const endpoint = "http://localhost:3001/auth";

export const loginUser = async (email: string, password: string) => {
  try {
    const response: any = await axios.post(`${endpoint}/login`, { 
      email, password
    });

    if (!response.data) {
      return null;
    }
    return response.data.token
  } catch (error) {
    return null;
  }
};

export const logout = async ()=>{
  Cookies.remove('access_token')
}