import React from 'react';
import Food from './Food';
import Snake from './Snake'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x, y];
}

class App extends React.Component {

  state = {
    food: getRandomCoordinates(),
    direction: 'RIGHT',
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  }

  componentDidMount() {
    document.onkeydown = this.onkeydown;
  }

  

  render () {
    return (
      <div className="game-zone">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
  
}

export default App;
