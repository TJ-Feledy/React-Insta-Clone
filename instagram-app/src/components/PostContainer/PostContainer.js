import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import '../PostContainer/PostContainer.css';

function PostContainer(props) {
  return (
    <div className='postContainer'>
      {console.log(props.object.comments)}
      <CommentSection comments={props.object.comments} />
    </div>
  )
};

PostContainer.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      text: PropTypes.string
    })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,

  })
}

export default PostContainer