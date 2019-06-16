import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeButton from './LikeButton';

import '../PostContainer/PostContainer.css';

function PostContainer(props) {
  return (
    <div className='postContainer'>
      {/* {console.log(props.object)} */}
      <div className='thumbnail'>
        <img className='thumbnailImg' src={props.object.thumbnailUrl} alt='thumbnail' />
        <p className='userName'> {props.object.username} </p>
      </div>
      <img className='postImg' src={props.object.imageUrl} alt='Look at this!' />
      <LikeButton likes={props.object.likes} />
      <CommentSection comments={props.object.comments} time={props.object.timestamp} />
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

};

PostContainer.defaultProps = {
  object: [{
    id: 0,
    username: 'default',
    thumbnailUrl: '',
    comments: [{id:0,username:'',text:''}],
    imageUrl: '',
    likes: 0,
    timestamp: '',
  }]
}

export default PostContainer