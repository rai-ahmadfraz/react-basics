import React, { Component } from 'react';
import Routes from '../src/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/header';
import combineReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
let store = createStore(combineReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
      </Provider>
    );
  }
}

export default App;
