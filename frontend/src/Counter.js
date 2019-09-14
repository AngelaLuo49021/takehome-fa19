import React, { Component } from 'react'
class Counter extends Component {
  // YOUR CODE GOES BELOW
  state = {count: 0}
    handleAddClick() {
      this.setState({count : this.state.count + 1})
    }
    handleSubtractClick() {
      this.setState({count : this.state.count -1 })
    }
   
  render() {
    
    const {count} = this.state
    
    
    return (
      
      <div>
      <label
        style = {{fontSize: '5em', display: 'block'}}
      >
        Count: {count}
      </label>
      <button onClick={() => this.handleAddClick()}>Add</button>
      <button onClick={() => this.handleSubtractClick()}>Subtract</button>
     
    </div>
    
    )
  }
}
export default Counter


