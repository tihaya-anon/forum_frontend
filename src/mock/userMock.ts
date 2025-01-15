import { mock } from "mockjs";
import { API } from "@/config/api";
import baseEndpoint from "./utils";
import { StatusCode } from "@/config/StatusCode";
import type { UserPersist } from "#/vo/user";

mock(baseEndpoint(API.USER.AUTH_TYPE), {
  code: StatusCode.SUCCESS,
  msg: "success",
  "data|3-8": [
    {
      "value|+1": 1,
      label: "@cname",
    },
  ],
});

mock(baseEndpoint(API.USER.AUTH_PHONE), {
  code: StatusCode.SUCCESS,
  msg: "success",
  data: {},
});

mock(baseEndpoint(API.USER.REGISTER), (config) => {
  console.table(config.body);
  return {
    code: StatusCode.SUCCESS,
    msg: "success",
    data: {},
  };
});

mock(baseEndpoint(API.USER.LOGIN), (config) => {
  console.table(config.body);
  const userPersist: UserPersist = {
    username: "username",
    id: 1,
    school: "school",
    token: "token",
  };
  return {
    code: StatusCode.SUCCESS,
    msg: "login success",
    data: userPersist,
  };
});
