import React, { useRef, useState } from "react";
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);

  const [title, setTitle] = useState('');
  const bodyInputRef = useRef()
 
  function addPost(e) {
    e.preventDefault()
    console.log(title);
    console.log(bodyInputRef.current.value);
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          type="text"
          placeholder="Название поста"
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput 
          ref={bodyInputRef} 
          type="text" 
          placeholder="Описание поста" 
        />
        <MyButton onClick={addPost}>Добавить пост</MyButton>
      </form>
      <PostsList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
