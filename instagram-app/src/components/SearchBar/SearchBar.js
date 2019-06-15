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
        <img className='logo' src='https://lh6.googleusercontent.com/sd2hf8yEqz6o5otl4xytK_TlmUqCTfhGFJ0GA1uqxgCianawr3tK8W6Ig02zLgtfS8eLFgbX1HTr26dlFapNGPRMQ250nTod7JrEXD4ffYu3rQDzTA=w1175' alt='logo'></img>
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