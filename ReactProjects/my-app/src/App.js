import React, { Component } from 'react'
import './App.css';
import StyledCard from './component/styled-card';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <StyledCard title="Getty Images unsplash.com" type="error">
          <img src="https://source.unsplash.com/random/800x500" alt="image-placeholder" />
        </StyledCard>
      </div>
    );
  }
}

export default App;
