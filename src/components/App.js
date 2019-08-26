import React from 'react';
import '../style/App.css';
import { constants } from '../utils/utils.js';

class App extends React.Component {
  render () {

    return (
        <div className="App">
          {constants.url}
        </div>
    );
  }
}

export default App;
