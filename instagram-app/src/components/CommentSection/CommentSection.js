import React from 'react';
import moment from 'moment';

import Comment from './Comment';
import CommentForm from './CommentForm';

import '../CommentSection/CommentSection.css';

function CommentSection(props) {
  const timeAgo = moment(props.time, 'MMMM Do YYYY, h:mm:ss a').startOf('day').fromNow()
  return (
    <div className='commentSection'>
      {/* {console.log(props.comments)} */}
      {props.comments.map(comment => {
        return <Comment userName={comment.username} text={comment.text} key={comment.id} />
      })}
      {/* {console.log(props.time)} */}
      <p className='timeAgo'> {timeAgo} </p>
      <CommentForm comments={props.comments} />
    </div>
  )
}

export default CommentSection;