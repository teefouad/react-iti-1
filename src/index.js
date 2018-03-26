import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';
import SearchBox from './SearchBox';
import SearchSorter from './SearchSorter';

class App extends Component {
  state = {
    results: [],
    selectedOrder: 'asc',
  };

  render() {
    const sortedResults = this.state.results ? this.state.results.sort((a, b) => {
      if (this.state.selectedOrder === 'asc') {
        return a.Year > b.Year;
      }

      return a.Year < b.Year;
    }) : [];

    return <div>
      <SearchBox onQueryChange={results => this.setState({ results })} />
      <SearchSorter order={this.state.selectedOrder} onChange={selectedOrder => this.setState({ selectedOrder })} />
      
      <ul>
        {
          sortedResults.map(result => (
            <li key={uuid()}>
              <div>
                <img src={result.Poster} alt={result.Title} />
                <h1>{result.Title}</h1>
                <p>{result.Year}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
