import axios from "axios";
const API_KEY =
  "oKlcwL18nHZdaBVH0BofKloqvNlB7GXorF1y5yKo9tzUQ2uthoiRsfqHYAmLjHPANM-yUocBzcspZpwCw2ROj5WiMuN6dm4v7ePQ8rauW1hUebNjPF5fBWz4JjZ1XXYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
