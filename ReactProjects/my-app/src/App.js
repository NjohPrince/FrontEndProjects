import React, { Component } from 'react'
import './App.css';
import StyledCard from './component/styled-card';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hover To See Behaviour</h1>
        <div className="box-container">
          <div className="card card-1">
            <StyledCard title="Getty Images unsplash.com" type="error" btnValue="Try React">
              <img src="https://source.unsplash.com/random/800x500" alt="image-placeholder" />
            </StyledCard>
          </div>
          <div className="card card-2">
            <StyledCard title="Just unsplash.com" type="success" btnValue="Cool Right">
              <img src="https://source.unsplash.com/random/800x500" alt="image-placeholder" />
            </StyledCard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
