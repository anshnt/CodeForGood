import axios from "axios";

const instance = axios.create({
  baseURL: "http://06559e7625c8.ngrok.io",
});
// http://localhost:5001/fir-9080e/us-central1/api

export default instance;


// front-end
// back-end