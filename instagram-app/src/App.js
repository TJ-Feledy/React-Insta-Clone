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
    return (
      // console.log(this.state.commentState),
      <div className="App">
        <SearchBar comState={this.state.commentState} />
        {this.state.data.map(obj => {
          return <PostContainer comStatefn={this.commentSectionState} object={obj} key={obj.id} />
        })}
      </div>
    );
  }
}
export default App;
