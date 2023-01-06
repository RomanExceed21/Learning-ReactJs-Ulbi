import React, { useMemo, useState } from "react";
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "rer", body: "lkj" },
    { id: 2, title: "sdsd", body: "iuy" },
    { id: 3, title: "tutu", body: "zxc" },
    { id: 4, title: "qwqw", body: "eg" },
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [visible, setVisible] = useState(false)

  const sortedPosts = useMemo(() => {
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
    setVisible(false)
  }

  function removepost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton 
        style={{marginTop: "30px"}} 
        onClick={() => setVisible(true)}
      >
        Добавить пользователя
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm
          create={createPost}
        />
      </MyModal>
      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList
        remove={removepost}
        posts={sortedAndSerchedPosts}
        title="Посты про JS"
      />
    </div>
  );
}

export default App;
