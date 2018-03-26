import React, { Component } from 'react';

class SearchSorter extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }
  
  render() {
    return (
      <div>
        <label>
          <input
            type="radio"
            value="asc"
            name="order"
            checked={this.props.order === "asc"}
            onChange={this.handleChange}
          />
          Older first
        </label>

        <label>
          <input
            type="radio"
            value="desc"
            name="order"
            checked={this.props.order === "desc"}
            onChange={this.handleChange}
          />
          Newer first
        </label>
      </div>
    );
  }
}

export default SearchSorter;
