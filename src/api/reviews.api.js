import axios from "axios";

const domain = "http://localhost:8000";

export const getReviews = async () => await axios.get(`${domain}/reviews/read`);

export const addReview = (item) => axios.post(`${domain}/reviews/add`, item);
