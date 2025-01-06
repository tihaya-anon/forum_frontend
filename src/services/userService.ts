import type { UserAuthPhone } from "../types/vo/user/UserAuthPhone";
import type {
  UserLogin,
  UserRegister,
  UserUpdate,
} from "../types/vo/user";
import type { AuthType } from "../types/AuthType";
import { API } from "../config/api";
import { get, post, patch, del } from "../utils/requests";

const authPhone = async (data: UserAuthPhone) => {
  return await post<UserAuthPhone>(
    API.USER.AUTH_PHONE,
    data
  );
};
const register = async (
  data: UserRegister,
  authType: string,
  phone: string
) => {
  return await post<UserRegister>(API.USER.REGISTER, data, {
    params: { authType, phone },
  });
};
const login = async (data: UserLogin, authType: string) => {
  return await post<UserLogin>(API.USER.LOGIN, data, {
    headers: { authType },
  });
};
const update = async (id: number, data: UserUpdate) => {
  const url = API.USER.UPDATE.replace(":id", id.toString());
  return await patch<UserUpdate>(url, data);
};
const delete_ = async (id: number) => {
  const url = API.USER.DELETE.replace(":id", id.toString());
  return await del(url);
};
const authTypes = async () => {
  return await get<null, AuthType[]>(API.USER.AUTH_TYPE);
};

export const userService = {
  authPhone,
  register,
  login,
  update,
  delete: delete_,
  authTypes,
};
