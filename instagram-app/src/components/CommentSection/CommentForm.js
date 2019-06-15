import React from 'react';

import './CommentForm.css';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.addNewComment)
    this.state = {
      addComment: '',
    }
  }

  changeHandler = event => {
    this.setState({ addComment: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    // console.log(this.state.addComment)
    this.props.addNewComment(this.state.addComment);
    this.setState({addComment: ''})
  }

  render() {
    return (
      <div className='addComment'>
        <form onSubmit={this.submitHandler}>
          <input 
            type='text' 
            placeholder='Add a comment...'
            value={this.state.addComment}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    )
  }
}

export default CommentForm