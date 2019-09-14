import React, { Component } from 'react'

class Instructions extends Component {
  render() {
    return (
      <div>
        <p>
          Pass a 'complete' prop to the instructions component in <code>src/App.js</code>. See the README for more details. If you are successful, you'll see another line below saying you've completed this part.
        </p>
        <br />
        <p hidden={this.props.complete}>
          Completed Part 1!
        </p>
      </div>
    )
  }
}

export default Instructions
//COUNTER
//ISSUE WITH COUNTER NOT RUNNING IF ITS NOT IN THIS FILE
/*

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
*/