import { mock, Random } from "mockjs";
import { API } from "@/config/api";
import baseEndpoint from "./utils";
import { StatusCode } from "@/config/StatusCode";

const regex = new RegExp(
  baseEndpoint(API.POST.LIST_RECENT) +
    "\\?pageIdx=\\d+&pageSize=\\d+"
);
const getRandomDate = ()=>{
  const startTimestamp = new Date("2025-01-13").getTime();
  const endTimestamp = new Date("2025-01-16").getTime();

  // 生成随机时间戳
  const randomTimestamp = mock({
    timestamp:
      "@integer(" +
      startTimestamp +
      "," +
      endTimestamp +
      ")",
  }).timestamp;

  // 转换为日期格式 (yyyy-MM-dd HH:mm:ss)
  const randomDate =
    new Date(randomTimestamp).toISOString().split("T")[0] +
    " " +
    new Date(randomTimestamp)
      .toISOString()
      .split("T")[1]
      .split(".")[0];
      return randomDate;
}
mock(regex, () => {
  // 返回 mock 数据
  return {
    code: StatusCode.SUCCESS,
    msg: "success",
    data: Array.from({
      length: Random.integer(15, 25),
    }).map(() => {
      return {
        id: Random.increment(100),
        title: Random.ctitle(),
        tagList: Array.from({
          length: Random.integer(3, 6),
        }).map(() => Random.cword(1, 3)),
        author: Random.increment(100),
        username: Random.cname(),
        commentCount: Random.integer(0, 100),
        likes: Random.integer(0, 100),
        dislikes: Random.integer(0, 100),
        createAt: getRandomDate(), // 使用生成的日期
        updateAt: getRandomDate(), // 使用生成的日期
      };
    }),
  };
});
