import React from "react";

function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}, {props.post.title}
          <div>{props.post.body}</div>
        </strong>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default PostItem;
