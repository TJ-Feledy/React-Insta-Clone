import React from 'react';
import dummyData from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';



function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(obj => {
        return <PostContainer object={obj} key={obj.id} />
      })}
    </div>
  );
}

export default App;
