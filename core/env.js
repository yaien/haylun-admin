import dotenv from "dotenv";

dotenv.config();

export default {
  api: {
    baseURL: process.env.API_BASEURL,
    key: process.env.API_KEY
  }
};
