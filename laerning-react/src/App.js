import React, { useState } from "react";
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "rer", body: "lkj" },
    { id: 2, title: "sdsd", body: "iuy" },
    { id: 3, title: "tutu", body: "zxc" },
    { id: 4, title: "qwqw", body: "eg" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removepost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  function sortPosts(sort) {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostsList remove={removepost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
