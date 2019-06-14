import React from 'react'

import './SearchBar.css'

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  };

  render() {
    return (
      <div className='searchBar'>
        <img className='logo' src='https://lh5.googleusercontent.com/9ZE6GceflqamipCXLijjUlN4D3qfKbP_s2adT1zw4kEpVfh76KUFTgSN1ac2GAvb5t5k-X31JbaTl5hfZ9EVIToib__x811qml11uJG05MeFLbKd0Q=w1175' alt='logo'></img>
        <input type='text' placeholder='Search' />
        <nav className='nav'>
          <a href='..../public/index.html'><i className="far fa-compass"></i></a>
          <a href='..../public/index.html'><i className="far fa-heart"></i></a>
          <a href='..../public/index.html'><i className="far fa-user"></i></a>
        </nav>
      </div>
    )
  }
}

export default SearchBar;