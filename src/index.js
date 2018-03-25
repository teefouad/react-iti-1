import React from 'react';
import ReactDOM from 'react-dom';

import './card.css';

const data = [
  {
    name: 'Mostafa Fouad',
    email: 'tee.fouad@gmail.com',
    website: 'http://teefouad.com',
    description: ''
  },
  {
    name: 'John doe',
    email: 'john@gmail.com',
  },
  {
    name: 'Janet Smith',
    website: 'http://jane.com',
    description: 'Rockstar frontend engineer'
  }
];

/**
 * 
<div className="card">
  <img src="https://www.gravatar.com/avatar/tee.fouad@gmail.com" />
  <div className="card-info">
    <h1><a href="http://teefouad.com">Mostafa Fouad</a></h1>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</div>
 */

const App = () => (
  <div>
    {/* items */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
