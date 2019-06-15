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
        <img className='logo' src='https://tjsappstuff.webnode.com/_files/200000000-3acfa3bd0a/instaLogo.png' alt='logo'></img>
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