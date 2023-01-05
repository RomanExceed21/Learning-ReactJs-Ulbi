import React, { useState } from "react";
import PostsList from './components/PostsList';

function App() {
  const [posts, setposts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);

  const [posts2, setposts2] = useState([
    { id: 1, title: "Python 1", body: "Description" },
    { id: 2, title: "Python 2", body: "Description" },
    { id: 3, title: "Python 3", body: "Description" },
    { id: 4, title: "Python 4", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostsList posts={posts} title="Посты про JS" />
      <PostsList posts={posts2} title="Посты про Python" />
    </div>
  );
}

export default App;
