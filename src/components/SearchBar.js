import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      // TODO Add properties to state that keep track of the search string and whether the input is valid
    }
  }

  // TODO Write a function handleChange that updates state with the search string

  // TODO Write a function handleSearch that checks for a valid search input, executes the search and toggles isLoading in the parent state

  render(){

    return(
      // TODO Add an onSubmit attribute to the form that fires the handleSearch function
      <form className="form-inline mt-2 mb-4" id="search-bar">
        <input
          type="text"
          className="form-control form-control-lg col-md-10 mb-2 mr-sm-2 mb-sm-0"
          id="inlineFormInput"
          placeholder="Search for stories or news sources..."
          // TODO Add onChange and value attributes to convert this to a controlled input
        />
        <button
          type="submit"
          className="btn btn-lg btn-primary">
          SEARCH
        </button>
      </form>
      /* TODO Add a warning message that is conditionally rendered when input is invalid*/
    );
  }
}

export default SearchBar;