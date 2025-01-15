import type { PostPersist } from "#/vo/post";
import type { PageReq } from "#/PageReq";
import { API } from "@/config/api";
import { get } from "@/utils/requests";

const listRecent = async (data: PageReq) => {
  const res = await get<PageReq, PostPersist[]>(
    API.POST.LIST_RECENT,
    data
  );
  return res;
};

export const postService = { listRecent };
