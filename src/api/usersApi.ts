import { APICONSTANTS } from "../Helper/ApiConstant";
import API_URL from "../Helper/Networkrequest";

const apiGetAllUsers = () => {
  return API_URL.get(APICONSTANTS.user);
};


const apiGetByIdUsers = (id: number) => {
  return API_URL.get(`${APICONSTANTS.user}/${id}`);
};


const apiUpdateUsers = () => {
  return API_URL.put(APICONSTANTS.user);
};



const apiDeleteUsers = () => {
  return API_URL.delete(APICONSTANTS.user);
};

export const usersApi = {
  apiGetAllUsers,
  apiUpdateUsers,
  apiGetByIdUsers,
  apiDeleteUsers,
};

