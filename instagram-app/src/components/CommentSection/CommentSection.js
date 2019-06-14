import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import '../CommentSection/CommentSection.css';

function CommentSection(props) {
  return (
    <div className='commentSection'>
      {/* {console.log(props.comments)} */}
      {props.comments.map(comment => {
        return <Comment userName={comment.username} text={comment.text} key={comment.id} />
      })}
      <CommentForm comments={props.comments} />
    </div>
  )
}

export default CommentSection;