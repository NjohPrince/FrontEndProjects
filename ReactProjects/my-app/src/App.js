import React, { Component } from 'react'
import './App.css';
import StyledCard from './component/styled-card';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="card-1">
          <StyledCard title="Getty Images unsplash.com" type="error">
            <img src="https://source.unsplash.com/random/800x500" alt="image-placeholder" />
          </StyledCard>
        </div>
        <StyledCard title="Just unsplash.com" type="success">
          <img src="https://source.unsplash.com/random/800x500" alt="image-placeholder" />
        </StyledCard>
      </div>
    );
  }
}

export default App;
