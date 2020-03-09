import React, { Component } from 'react';
import AppRouter from './shared/router/index';

class App extends Component {
  render() {
    return (
      <div className="app-main">
        {<AppRouter />}
      </div>
    )
  }
}

export default App;
