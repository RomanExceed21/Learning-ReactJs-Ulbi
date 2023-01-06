import React, { useState } from "react";
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostsList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
