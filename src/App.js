import React from "react";
import { useState } from "react";
import MyInput from "./components/input/MyInput";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript2", body: "Description" },
    { id: 3, title: "Javascript3", body: "Description" },
  ]);

  return (
    <div className="App">
      <form action="">
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
