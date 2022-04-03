import React from 'react'
import Header from '../components/Header'
import NewPost from '../components/NewPost'
import PostList from '../components/PostList'

function MainScreen() {
  return (
    <div>
      <Header />
      <NewPost />
      <PostList />
    </div>
  )
}

export default MainScreen