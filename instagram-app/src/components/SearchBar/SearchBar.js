import React from 'react';
import SearchForm from './SearchForm';

import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  };

  render() {
    return (
      <div className='searchBar'>
        <img className='logo' src='https://tjsappstuff.webnode.com/_files/200000000-3acfa3bd0a/instaLogo.png' alt='logo'></img>
        <SearchForm comState={this.props.comState} />
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