import React from 'react';

import './CommentForm.css';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addComment: '',
    }
  }

  render() {
    return (
      <div className='addComment'>
        <form>
          <input type='text' placeholder='Add a comment...' />
        </form>
      </div>
    )
  }
}

export default CommentForm