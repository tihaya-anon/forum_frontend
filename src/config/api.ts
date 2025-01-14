export const BASE_URL = "http://localhost:8080";
export const API = {
  USER: {
    AUTH_PHONE: "/user/auth_phone",
    REGISTER: "/user/register",
    LOGIN: "/user/login",
    UPDATE: "/user/:id",
    DELETE: "/user/:id",
    AUTH_TYPE: "/user/auth_type",
  },
  POST: {
    PUBLISH: "/post/:id",
    DELETE: "/post/:id",
    FILTER_AUTHOR: "/post/author/:id",
    FILTER_TAG: "/post/tag/:tag",
    LIST_RECENT: "/post/list",
  },
};
