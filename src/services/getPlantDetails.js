import axios from "axios";
export const baseURL = `http://dev.api.agrilution.com/plantData.json`;
// export const baseURL = `https://dev.api.agrilution.com/plantData2.json`;
export const newPlantDetailsURL = `${baseURL}`;
// async function always returns a promise with data
// Promise call to fetch the data from the API
export const getPlantsDetails = async () => {
  // destructuring the the API fetched data by using {data}
  const result = await axios
    .get(`${newPlantDetailsURL}`)
    .then(({ data }) => data && data);
  return result;
};
