import React, { Component } from 'react'
import './App.css';
import StyledCard from './component/styled-card';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <StyledCard>
          <div>Your items are out of stock.</div>
        </StyledCard>
      </div>
    );
  }
}

export default App;
