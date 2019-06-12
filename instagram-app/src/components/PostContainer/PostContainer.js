import React from 'react';
import '../PostContainer/PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div className='postContainer'>
      {console.log(props.object)}
      {props.map((obj, index) => {
        return <CommentSection comments={obj.comments} key={index} />
      })}
    </div>
  )
}

export default PostContainer