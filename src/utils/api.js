// ✅ todo import axios
import axios from "axios";
// ✅ todo use https://randomuser.me/ for easy random user results
const url = "https://randomuser.me/api/?results=12";

export default {
  ApiSearch: function () {
    return axios.get(url);
  },
};
