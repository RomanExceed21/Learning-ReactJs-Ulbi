import React from 'react';
import '../styles/App.css'
import MyButton from './UI/button/MyButton';

export default function PostItem({post, number}) {
	return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {number}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
}
