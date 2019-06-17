import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      commentState: this.props.comState,
    }
    // console.log(this.props.comState)
  }

  render() {
    return(
      <div className='searchFormContainer'>
        <form className='searchForm'>
          <input type='text' placeholder='Search' />
        </form>
      </div>
    )
  }
}

export default SearchForm;