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
    console.log("Error while calling getWatched api", error.message);
  }
};

export const PostMovied = async (moviereg) => {
  try {
    return await axios.post(`${API_URL}/watched/add`, moviereg);
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};

export const PutMovied = async (moviereg, id) => {
  try {
    return await axios.put(
      `${API_URL}/movielist/moviedetail/update/${id}`,
      moviereg
    );
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};

export const PutNextMovied = async (moviereg, id) => {
  try {
    return await axios.put(
      `${API_URL}/movielist/nextmoviedetail/update/${id}`,
      moviereg
    );
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};

export const PostNextMovied = async (moviereg) => {
  try {
    return await axios.post(`${API_URL}/nextwatched/add`, moviereg);
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};

export const getMovied = async (id) => {
  try {
    return await axios.get(`${API_URL}/movielist/moviedetail/${id}`);
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};

export const getNextMovied = async (id) => {
  try {
    return await axios.get(`${API_URL}/nextmovielist/moviedetail/${id}`);
  } catch (error) {
    console.log("Error while calling getWatched api", error.message);
  }
};

export const deleteMovied = async (id) => {
  try {
    return await axios.delete(
      `${API_URL}/movielist/moviedetail/deleteItem/${id}`
    );
  } catch (error) {
    console.log("Error while calling deleteUser api", error.message);
  }
};
export const deleteNextMovied = async (id) => {
  try {
    return await axios.delete(
      `${API_URL}/nextmovielist/moviedetail/deleteItem/${id}`
    );
  } catch (error) {
    console.log("Error while calling deleteUser api", error.message);
  }
};
