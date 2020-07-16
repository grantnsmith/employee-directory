import axios from "axios";
const BASEURL =
  "https://randomuser.me/api/?results=1&nat=us&inc=name,email,phone,dob,picture";

export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
