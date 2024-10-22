import axios from 'axios';
const API_URL = 'http://localhost:3000';

export const addUserInfo = async (email, password , username) => {
    try {
  
      const response = await axios.post(`${API_URL}/signup`, { email , password , username });
      return response.username; // Returns the success message
    } catch (error) {
      throw new Error(error.response.data.message || 'Error adding ID');
    }
  };