import { BASE_URL } from "@/config/api";

export default function baseEndpoint(url: string) {
  return BASE_URL + url;
}
