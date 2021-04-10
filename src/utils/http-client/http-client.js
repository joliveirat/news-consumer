import axios from "axios";

const createHTTPClient = (config) => axios.create(config);

export default createHTTPClient;
