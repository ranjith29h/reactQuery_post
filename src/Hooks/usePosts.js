import { useQuery } from "react-query";
import axios from "axios";

export default function usePosts() {
  return useQuery("posts", () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  });
}
