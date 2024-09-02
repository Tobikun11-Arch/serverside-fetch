import axios from 'axios';


const API_URL = process.env.API_URL!;

// fetch from deezer
export const fetchDeezer = async() => {


  try {

    const response = await axios.get(API_URL);
    const data = response.data;

        return data;

    } 
  
  catch (error) {

    console.error('Error fetching:', error);

  }
}
