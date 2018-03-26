import React, { Component } from 'react';
import api from './api';

class SearchBox extends Component {
  handleQueryChange = (e) => {
    e.persist();

    clearTimeout(this.debounceSearch);

    this.debounceSearch = setTimeout(() => {
      api.search(e.target.value).then(data => {
        this.props.onQueryChange(data.Search);
      });
    }, 200);
  }
  
  render() {
    return (
      <div>
        <input onChange={this.handleQueryChange} />
      </div>
    );
  }
}

export default SearchBox;
