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
    speed: 200,
    direction: 'RIGHT',
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onkeydown;
  }

  componentDidUpdate() {
    this.checkBoundaries();
  }

  onkeydown = (e) => {
    e = e || window.event;
    switch(e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch(this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();

    this.setState({
      snakeDots: dots
    })
  }

  checkBoundaries() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  }

  gameOver() {
    alert(`Game Over! Snake length is ${this.state.snakeDots.length}`);
    this.setState({
      food: getRandomCoordinates(),
      speed: 200,
      direction: 'RIGHT',
      snakeDots: [
        [0, 0],
        [2, 0]
      ]
    })
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
