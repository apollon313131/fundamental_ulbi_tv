import React from "react";
import { useState } from "react";
import MyInput from "../components/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });
  function addNewPost(e) {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    e.preventDefault();
    setPost({ title: "", body: "" });
  }

  return (
    <div>
      <form action="">
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        {/* Неуправляемый/Неконтролируемый компонент */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        {/* ref={bodyInputRef}*/}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
}

export default PostForm;
