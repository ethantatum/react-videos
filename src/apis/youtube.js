import axios from "axios";

const KEY = "AIzaSyBhOzi3BiBfKvFVCwKdvLdnr45ooLlXMjc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});
