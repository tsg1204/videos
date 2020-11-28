import axios from "axios";

const KEY = 'AIzaSyBfmX4eSHIm54cvG1ZjoAHzdRaVxluZMl8';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});