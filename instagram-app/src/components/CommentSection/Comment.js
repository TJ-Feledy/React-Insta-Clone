import React from 'react'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  };

  render() {
    
    return (
      <div className='comment'>
        <h3 className='userName'>{this.props.userName}</h3>
        <p className='text'>{this.props.text}</p>
      </div>
    )
  }
}

export default Comment;