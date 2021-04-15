import React, { Component } from 'react'
import './App.css';
import StyledCard from './component/styled-card';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <StyledCard title="Items Not Added" type="success">
          <img src="https://source.unsplash.com/random/800x600" alt="image-placeholder" />
        </StyledCard>
      </div>
    );
  }
}

export default App;
