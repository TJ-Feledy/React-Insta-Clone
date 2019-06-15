import React from 'react';

import './CommentForm.css';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.comments)
    this.state = {
      addComment: '',
    }
  }

  changHandler = event => {
    this.setState({ addComment: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    // console.log(this.props.)
  }

  render() {
    return (
      <div className='addComment'>
        <form>
          <input 
            type='text' 
            placeholder='Add a comment...'
            value={this.state.addComment}
          />
        </form>
      </div>
    )
  }
}

export default CommentForm