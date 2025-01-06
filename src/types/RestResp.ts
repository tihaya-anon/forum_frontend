export type RestResp<T> = {
  code: string;
  msg: string;
  data: T;
};
