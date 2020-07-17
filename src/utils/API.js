import axios from "axios";
const URL =
  "https://randomuser.me/api/?results=200&nat=us&inc=name,email,phone,dob,picture";

export default {
  search: function () {
    return axios.get(URL);
  },
};
