import { useQuery } from "react-query";
import axios from "axios";

export default function usePost(id) {
  return useQuery(["post", id], () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  });
}
