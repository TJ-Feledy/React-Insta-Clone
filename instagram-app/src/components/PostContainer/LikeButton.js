import React from 'react'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    const likes = {
      numLikes: this.props.likes,
      clicked: false
    }

    this.state = {
      newLikes: likes,
    }
  }

  clickHandler = () => {

  }

  render() {
    return (
      <div className='likeButton'>
        <i className="far fa-heart"></i>
      </div>
    )
  }
}

export default LikeButton;