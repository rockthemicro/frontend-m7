import React from 'react';
import '../style/App.css';
import Login from './Login.js';
import Home from './Home.js';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {page: 1}
  }

  changePage = (page) => {
    this.setState({page: page})
  }
  render () {

    return (
        <div className="App">
          {this.state.page === 1 && <Login changePage={this.changePage}/>}
          {this.state.page === 2 && <Home changePage={this.changePage}/>}
        </div>
    );
  }
}

export default App;
