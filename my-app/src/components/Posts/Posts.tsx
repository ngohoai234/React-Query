import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import PostDetail from "./PostDetail/PostDetail";
import { fetchPosts } from "../../services/postService";
import { IPost } from "../../models/PostModel";

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  const { data, isError, error, isLoading, fetchStatus } = useQuery<
    IPost[],
    Error
  >({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: false,
  });

  console.log(fetchStatus, " fetchStatus");

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <ul>
        {data.map((post: any) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
