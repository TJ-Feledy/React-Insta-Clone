import React from 'react';
import Comment from './Comment'
import '../CommentSection/CommentSection.css';

function CommentSection(props) {
  return (
    <div className='commentSection'>
      {console.log(props.comments)}
      {props.comments.map(comment => {
        return <Comment userName={comment.username} text={comment.text} key={comment.id} />
      })}
    </div>
  )
}

export default CommentSection;