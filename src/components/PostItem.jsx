import React from "react";
import MyButton from "../components/UI/button/MyButton";

function PostItem(props, remove) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}, {props.post.title}
          <div>{props.post.body}</div>
        </strong>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
