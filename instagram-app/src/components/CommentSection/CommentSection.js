import React from 'react';
import moment from 'moment';

import Comment from './Comment';
import CommentForm from './CommentForm';

import '../CommentSection/CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    const commenters = this.props.comments;
    const time = this.props.time;
    this.state = {
      updatedCommenters: commenters,
      newTime: time,
    }
    // console.log(this.state)

    this.updater(this.state.updatedCommenters);
  }
  
  addCommenter = newComment => {
    const newCommenter = {
      id: this.state.updatedCommenters.length+1,
      username: 'insta-guest',
      text: newComment
    };


    this.setState({
      updatedCommenters: [...this.state.updatedCommenters, newCommenter],
      newTime: moment().format('MMMM Do YYYY, h:mm:ss a')
    }); 
  }
  
  updater = info => {
    this.props.comState(info)
  }
  // componentWillUpdate(nextProps,nextState) {
  //   localStorage.setItem('commenters', JSON.stringify(nextState.updatedCommenters));
  //   localStorage.setItem('time', JSON.stringify(nextState.newTime));
  // }

  // componentWillMount() {
  //   localStorage.getItem('commenters') && this.setState({
  //     updatedCommenters: JSON.parse(localStorage.getItem('commenters')),
  //     newTime: JSON.parse(localStorage.getItem('time'))
  //   })
  // }
  

  render() {
    // console.log(this.state.updatedCommenters)
    // console.log(this.state.newTime)
    const timeAgo = moment(this.state.newTime, 'MMMM Do YYYY, h:mm:ss a').fromNow()

    return (
      <div className='commentSection'>
        {this.state.updatedCommenters.map(comment => {
          return <Comment userName={comment.username} text={comment.text} key={comment.id} />
        })}
        <p className='timeAgo'> {timeAgo} </p>
        <CommentForm addNewComment={this.addCommenter} />
      </div>
    )
    
  }
}

export default CommentSection;