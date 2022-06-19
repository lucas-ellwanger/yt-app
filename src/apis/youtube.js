import axios from "axios";

const KEY = "AIzaSyBrVFcbWSheZRRt5vtx_bLx7ZPFF_TmK5w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
