import React from 'react';
import dummyData from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentState: [],
      data: []
    }
  }

  commentSectionState = (state) => {
    const updatedState = state;
    this.setState({ commentState: updatedState});
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }
  

  render() {
    console.log(this.state.data)
    const users = this.state.data.map(user => {
      return user.username
    })
    return (
      <div className="App">
        <SearchBar users={users} />
        {this.state.data.length > 0 ? (this.state.data.map(obj => {
          return <PostContainer comStatefn={this.commentSectionState} object={obj} key={obj.id} />
        }))
        : (<h1>Loading...</h1>)}
      </div>
    );
  }
}
export default App;
