import React, { Component } from 'react';
import reducer from './reducers/reducer'
import './App.css';
import { connect } from 'react-redux'

import MainLayout from './containers/MainLayout'


class App extends Component {
  render() {
    return (
      <div className="App">
          <MainLayout />
      </div>
    );
  }
}

export default App;
