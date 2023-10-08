import React from "react";
import { fetchPosts } from "../../services/postService";
import { useQuery } from "@tanstack/react-query";
import { IPost } from "../../models/PostModel";

const Test = () => {
  const { data, isError, error, isLoading } = useQuery<IPost[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  return <div>Test</div>;
};

export default Test;
