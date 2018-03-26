import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';

class Todo extends Component {
  state = {
    items: [
      {
        text: 'Do something',
        complete: true,
      },
      {
        text: 'Do something else',
        complete: false,
      },
    ]
  }

  addNewItem = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        items: [
          ...this.state.items,
          {
            text: e.target.value
          }
        ],
      });

      e.target.value = '';
    }
  }

  changeItemState = (index, state) => {
    const items = this.state.items.slice();

    items[index].complete = state;

    this.setState({
      items,
    });
  }

  removeCompleteItems = () => {
    this.setState({
      items: this.state.items.filter(item => !item.complete)
    })
  }
  
  render() {
    return <div>
      <input onKeyUp={this.addNewItem} />

      <ul>
        {
          this.state.items.map((item, index) => (
            <li key={uuid()}>
              <label>
                <input type="checkbox" checked={item.complete} onChange={(e) => this.changeItemState(index, e.target.checked)} />
                {item.complete ? <s>{item.text}</s> : item.text}
              </label>
            </li>
          ))
        }
      </ul>

      <button onClick={this.removeCompleteItems}>Remove completed</button>
    </div>;
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
