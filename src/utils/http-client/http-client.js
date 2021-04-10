import axios from "axios";

const createClient = (baseURL) =>
  axios.create({
    baseURL,
  });

export default createClient;
