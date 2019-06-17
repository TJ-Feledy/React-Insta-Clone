import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const userNames = this.props.users
    this.state = {
      users: userNames,
      search: ''
    }
  }

  changeHandler = event => {
    this.setState({ search: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

  }

  render() {
    console.log(this.state.users)
    let filteredUsers = this.props.users.filter(user => {
      return user.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
    return(
      <div className='searchFormContainer'>
        <form className='searchForm'>
          <input 
            type='text' 
            placeholder='Search' 
            value={this.state.search}
            onChange={this.changeHandler}
          />
        </form>
        {/* <div className='filteredContainer'>
          <ul>
            {filteredUsers.map(user => {
              return <p className='filteredUser'>{user}</p>
            })}
          </ul>
        </div> */}
      </div>
    )
  }
}

export default SearchForm;