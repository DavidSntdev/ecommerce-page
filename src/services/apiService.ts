import axios from "axios";

export const fetchCountry = async () => {
  try {
    const response = await axios.get(`https://ipapi.co/json/`);
    return response.data.country_name;
  } catch (error) {
    console.error("Error fetching country data", error);
    throw error;
  }
};
