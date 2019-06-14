import React from 'react'

import InstaLogo from 'C:/Users/TJFeledy/Desktop/LambdaSchoolWork/ReactApps/React-Insta-Clone/instagram-app/src/components/SearchBar/instaLogo.png';
import Compass from 'C:/Users/TJFeledy/Desktop/LambdaSchoolWork/ReactApps/React-Insta-Clone/instagram-app/src/components/SearchBar/compass.svg';
import Heart from 'C:/Users/TJFeledy/Desktop/LambdaSchoolWork/ReactApps/React-Insta-Clone/instagram-app/src/components/SearchBar/heart.svg';
import User from 'C:/Users/TJFeledy/Desktop/LambdaSchoolWork/ReactApps/React-Insta-Clone/instagram-app/src/components/SearchBar/user.svg';

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
        <img className='logo' src={InstaLogo} alt='logo'></img>
        <input type='text' placeholder='Search' />
        <nav className='nav'>
          <a href='..../public/index.html'><img src={Compass} alt='compass' /></a>
          <a href='..../public/index.html'><img src={Heart} alt='heart' /></a>
          <a href='..../public/index.html'><img src={User} alt='user' /></a>
        </nav>
      </div>
    )
  }
}

export default SearchBar;