import { API } from "@/config/api";
import { PageReq } from "@/types/PageReq";
import { get } from "@/utils/requests";
import { PostPersist } from "@/types/vo/post";

const listRecent = async (data: PageReq) => {
  return await get<PageReq, PostPersist[]>(
    API.POST.LIST_RECENT,
    data
  );
};

export const postService = { listRecent };
