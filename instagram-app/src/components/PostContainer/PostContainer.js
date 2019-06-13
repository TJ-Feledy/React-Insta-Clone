import React from 'react';
import '../PostContainer/PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div className='postContainer'>
      {/* {console.log(props.object.comments)} */}
      <CommentSection comments={props.object.comments} />
    </div>
  )
}

export default PostContainer