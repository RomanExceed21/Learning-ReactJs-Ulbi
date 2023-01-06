import React, { useMemo, useState } from "react";
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "rer", body: "lkj" },
    { id: 2, title: "sdsd", body: "iuy" },
    { id: 3, title: "tutu", body: "zxc" },
    { id: 4, title: "qwqw", body: "eg" },
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""})

  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts])

  const sortedAndSerchedPosts = useMemo(() =>{
    return sortedPosts.filter((post) => post.title.toLocaleLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removepost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostsList
        remove={removepost}
        posts={sortedAndSerchedPosts}
        title="Посты про JS"
      />
    </div>
  );
}

export default App;
