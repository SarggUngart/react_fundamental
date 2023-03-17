import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.incrF = this.incrF.bind(this)
    this.DecrF = this.DecrF.bind(this)
  }
  
  incrF() {
    this.setState({count: this.state.count + 1})
  }
  
  DecrF() {
    this.setState({count: this.state.count - 1})
  }
  
  render() {
    
    
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrF}>Increment</button>
        <button onClick={this.DecrF}>Decrement</button>
      </div>
    )
  }
}

export default ClassCounter;