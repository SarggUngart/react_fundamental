import React from "react";

export const usePostedPost = (posts, sort) => {
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
  
  return sortedPosts
}


export const usePosts = (posts, sort, find) => {
  const sortedPost = usePostedPost(posts, sort)
  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(find.toLowerCase()))
  }, [find, sortedPost])
  return sortedAndSearchedPosts
}