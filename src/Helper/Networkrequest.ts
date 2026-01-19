import axios from "axios";
import { APICONSTANTS } from "../Helper/ApiConstant";



 const API_URL = axios.create({
    baseURL: APICONSTANTS.baseURL,
  headers: {
    "Content-Type": "application/json",
    },
  
});
console.log(API_URL);
export default API_URL