import React, { useEffect, useState } from "react";
import { usePosts } from './hooks/usePosts';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [visible, setVisible] = useState(false)
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false)
  }

  async function fetchPosts () {
    setIsPostLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts);
    setIsPostLoading(false);

  }

  function removepost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setVisible(true)}>
        Добавить пост
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
          <Loader />
        </div>
      ) : (
        <PostsList
          remove={removepost}
          posts={sortedAndSerchedPosts}
          title="Посты про JS"
        />
      )}
    </div>
  );
}

export default App;
