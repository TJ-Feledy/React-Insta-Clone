import React from 'react'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
    const likes = {
      numLikes: this.props.likes,
      clicked: false
    }

    this.state = {
      newLikes: likes,
    }
  }

  toggleItem = like => {
    // console.log(like);
    let newLikeItem = {};
    if (this.state.newLikes.clicked === false) {
      newLikeItem = {
        ...like,
        numLikes: like.numLikes + 1,
        clicked: true
      };
      return this.setState({ newLikes: newLikeItem });
    } 
    else if (this.state.newLikes.clicked === true){
      newLikeItem = {
        ...like,
        numLikes: like.numLikes - 1,
        clicked: false
      };
      return this.setState({ newLikes: newLikeItem });
    };
  }
  
  clickHandler = () => {
    this.toggleItem(this.state.newLikes)
  }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('newLikes', JSON.stringify(nextState.newLikes));
  // }

  // componentWillMount() {
  //   localStorage.getItem('newLikes') && this.setState({
  //     newLikes: JSON.parse(localStorage.getItem('newLikes')),
  //   })
  // }

  render() {
    return (
      <div className='likeContainer'>
        <div 
          className={`likeButton ${this.state.newLikes.clicked ? 'clicked' : ''}`}
          onClick={this.clickHandler}
        >
          <i className="far fa-heart"></i>
        </div>
        <p className='likes'> {this.state.newLikes.numLikes} likes</p>
      </div>
    )
  }
}

export default LikeButton;