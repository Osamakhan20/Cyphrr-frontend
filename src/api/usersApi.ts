import { APICONSTANTS } from "../Helper/ApiConstant";
import API_URL from "../Helper/Networkrequest";

const apiGetAllUsers = () => {
  return API_URL.get(APICONSTANTS.user);
};

const apiGetByIdUsers = (id: number) => {
  return API_URL.get(`${APICONSTANTS.user}${id}`);
};

const apiCreateUser = (data: User) => {
  return API_URL.post(APICONSTANTS.user, data);
};

const apiLoginUser = (loginPayload: any) => {
  return API_URL.post(APICONSTANTS.authURL, loginPayload);
};

const apiUpdateUsers = (id: number, data: User) => {
  return API_URL.put(`${APICONSTANTS.user}${id}`, data);
};

const apiDeleteUsers = (id: number) => {
  return API_URL.delete(`${APICONSTANTS.user}${id}`);
};

export const usersApi = {
  apiGetAllUsers,
  apiGetByIdUsers,
  apiCreateUser,
  apiLoginUser,
  apiUpdateUsers,
  apiDeleteUsers,
};
