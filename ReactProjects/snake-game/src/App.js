import React from 'react';
import Snake from './Snake'

class App extends React.Component {

  state = {
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  }

  render () {
    return (
      <div className="game-zone">
        <Snake snakeDots={this.state.snakeDots} />
      </div>
    );
  }
  
}

export default App;
