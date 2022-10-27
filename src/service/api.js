import axios from "axios";

export const tmdb_api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API_URL = "http://localhost:8080";

export const getWatched = async () => {
  try {
    return await axios.get(`${API_URL}/moviedlist`);
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};
export const getNextWatched = async () => {
  try {
    return await axios.get(`${API_URL}/nextmoviedlist`);
  } catch (error) {
    console.log("Error while calling getNextWatchedapi", error.message);
  }
};

export const PostMovied = async (moviereg) => {
  try {
    return await axios.post(`${API_URL}/watched/add`, moviereg);
  } catch (error) {
    console.log("Error while calling PostMovied api", error.message);
  }
};

export const PutMovied = async (moviereg, id) => {
  try {
    return await axios.put(
      `${API_URL}/movielist/moviedetail/update/${id}`,
      moviereg
    );
  } catch (error) {
    console.log("Error while calling PutMovied api", error.message);
  }
};

export const PutNextMovied = async (moviereg, id) => {
  try {
    return await axios.put(
      `${API_URL}/movielist/nextmoviedetail/update/${id}`,
      moviereg
    );
  } catch (error) {
    console.log("Error while calling PutNextMovied api", error.message);
  }
};

export const PostNextMovied = async (moviereg) => {
  try {
    return await axios.post(`${API_URL}/nextwatched/add`, moviereg);
  } catch (error) {
    console.log("Error while calling PostNextMovied api", error.message);
  }
};

export const getDetailMovied = async (id) => {
  try {
    return await axios.get(`${API_URL}/movielist/moviedetail/${id}`);
  } catch (error) {
    console.log("Error while calling getMovied api", error.message);
  }
};

export const getDetailNextMovied = async (id) => {
  try {
    return await axios.get(`${API_URL}/nextmovielist/moviedetail/${id}`);
  } catch (error) {
    console.log("Error while calling getNextMovied api", error.message);
  }
};

export const deleteWatched = async (id) => {
  try {
    return await axios.delete(
      `${API_URL}/movielist/moviedetail/deleteItem/${id}`
    );
  } catch (error) {
    console.log("Error while calling deleteWatched api", error.message);
  }
};
export const deleteNextWatched = async (id) => {
  try {
    return await axios.delete(
      `${API_URL}/nextmovielist/moviedetail/deleteItem/${id}`
    );
  } catch (error) {
    console.log("Error while calling deleteNextWatched api", error.message);
  }
};
