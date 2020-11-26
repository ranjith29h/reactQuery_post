import React, { useState } from "react";
import usePosts from "./Hooks/usePosts";
import usePost from "./Hooks/usePost";

export default function App() {
  const [postId, setPostId] = useState(-1);

  return postId > -1 ? (
    <Post postId={postId} setPostId={setPostId} />
  ) : (
    <Posts setPostId={setPostId} />
  );
}

function Posts({ setPostId }) {
  const { isLoading, data, isFetching } = usePosts();
  return isLoading ? (
    "Loading...."
  ) : (
    <div className="App">
      {isFetching && "..."}
      <ul>
        {data.data?.map((post) => {
          return (
            <li onClick={(e) => setPostId(post.id)} key={post.id}>
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Post({ postId, setPostId }) {
  console.log(postId);
  const { isLoading, data, isFetching } = usePost(postId);
  console.log(data);
  return isLoading ? (
    "Loading...."
  ) : (
    <div className="App">
      {isFetching && "..."}
      <p>
        <p onClick={(e) => setPostId(-1)}>Back</p>
        <b>Title : </b>
        {data.data.title}
      </p>
      <p>
        <b>Description : </b> {data.data.body}
      </p>
    </div>
  );
}
