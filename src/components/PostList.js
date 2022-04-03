import React from 'react'
import { useSelector } from 'react-redux';
import PostCard from './PostCard';

function PostList() {

  const posts = useSelector(state => state.posts);
  console.log(posts);

  return (
    <div>
      <ul>
        { posts
          .map((post, i) => (
            <PostCard 
              key={ i }
              index = { i }
              post={ post }
            />
          ))}
      </ul>
    </div>
  )
}

export default PostList