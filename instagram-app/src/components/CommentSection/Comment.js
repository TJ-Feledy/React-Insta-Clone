import React from 'react'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div className='comment'>
        {console.log(this.props)}
      </div>
    )
  }
}

export default Comment;