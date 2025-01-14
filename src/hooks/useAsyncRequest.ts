import { RestResp } from "@/types/RestResp";
import { useState } from "react";

const useAsyncRequest = <TParams extends unknown[], TResult>(
  asyncFunc: (...params: TParams) => Promise<RestResp<TResult>> // 异步函数接受多个参数，且参数类型为 TParams
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);


  const request= async (
    ...params: TParams
  ): Promise<RestResp<TResult> | null> => {
    setError(null);
    setLoading(true);
    try {
      const result = await asyncFunc(...params);
      return result;
    } catch (e) {
      setError(e as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, request, error };
};

export default useAsyncRequest;
