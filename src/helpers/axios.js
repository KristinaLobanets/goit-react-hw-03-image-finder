import axios from "axios";

const fetchImagesWithQuery = (query, page = 1, key_search) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key_search}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((result) => console.log(result));
};
export default {
  fetchImagesWithQuery,
};
