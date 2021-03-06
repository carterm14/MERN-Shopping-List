import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/shoppingList'

import { Provider } from 'react-redux';
import store from './store';
//adding comment to see if Git picks it up
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
