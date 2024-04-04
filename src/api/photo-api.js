import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhoto = async (query, page) => {
  const response = axios.get(
    `search/photos?client_id=t4LK2huX2-sWCNvo9jm9fsQDcxQmjSTApwNgDYEzrBA&page=${page}&per_page=12&query=${query}`
  );
  return response;
};
