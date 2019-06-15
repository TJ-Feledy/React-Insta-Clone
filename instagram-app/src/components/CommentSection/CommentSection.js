import React from 'react';
import moment from 'moment';

import Comment from './Comment';
import CommentForm from './CommentForm';

import '../CommentSection/CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    const commenters = this.props.comments;
    this.state = {
      updatedCommenters: commenters,
    }
  }

  addCommenter = newComment => {
    const newCommenter = {
      id: this.state.updatedCommenters.length,
      username: 'insta-guest',
      text: newComment
    };

    this.setState({
      updatedCommenters: [...this.state.updatedCommenters, newCommenter]
    })
  }

  render() {
    const timeAgo = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').startOf('day').fromNow()
    return (
      <div className='commentSection'>
        {this.props.comments.map(comment => {
          return <Comment userName={comment.username} text={comment.text} key={comment.id} />
        })}
        <p className='timeAgo'> {timeAgo} </p>
        <CommentForm addNewComment={this.addCommenter} />
      </div>
    )
  }
}

export default CommentSection;