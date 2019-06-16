import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      commentState: this.props.comState,
    }
    console.log(this.state.commentState)
  }

  render() {
    return(
      <div className='searchFormContainer'>

      </div>
    )
  }
}

export default SearchForm;