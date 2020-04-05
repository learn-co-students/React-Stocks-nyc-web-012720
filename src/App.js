import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import StockContainer from './containers/StockContainer.js'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
        
      </div>
    );
  }
}

export default App;
