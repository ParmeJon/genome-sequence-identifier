import React, { Component } from 'react';
import reducer from './reducers/reducer'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
