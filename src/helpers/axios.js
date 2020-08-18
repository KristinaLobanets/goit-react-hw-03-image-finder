import axios from "axios";
const key_search = "17504115-e1f4917cce04b285bef9ea485";
axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImagesWithQuery = (query, page = 1) => {
  return axios
    .get(
      `/?q=${query}&page=${page}&key=${key_search}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
export default fetchImagesWithQuery;
