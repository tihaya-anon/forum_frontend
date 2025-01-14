import { mock } from "mockjs";
import { API } from "@/config/api";
import baseEndpoint from "./utils";
import { StatusCode } from "@/config/StatusCode";

const regex = new RegExp(
  baseEndpoint(API.POST.LIST_RECENT) +
    "\\?pageIdx=\\d+&pageSize=\\d+"
);

mock(regex, {
  code: StatusCode.SUCCESS,
  msg: "success",
  "data|15-25": [
    {
      id: "@increment(100)",
      title: "@ctitle",
      "tagList|3-6": ["@cword"],
      author: "@increment(100)",
      username: "@cname",
      commentCount: "@integer(0, 100)",
      likes: "@integer(0, 100)",
      dislikes: "@integer(0, 100)",
      createAt: "@datetime",
      updateAt: "@datetime",
    },
  ],
});
