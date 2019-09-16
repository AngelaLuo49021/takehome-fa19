import React, { Component } from 'react'
import Instructions from './Instructions'
import Contact from './Contact'
import Counter from './Counter'
 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {id: 1, name: "Angad", nickname: "greg", hobby: "dirty-ing"},
        {id: 2, name: "Roy", nickname: "uwu", hobby: "weeb"},
        {id: 3, name: "Daniel", nickname: "oppa", hobby: "losing money with options trading"},
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const num = Object.keys(this.state.contacts).length
    const newItem =  {id: num+1, name: "Angela", nickname: "toast", hobby: "crying"}
    this.setState({contacts: this.state.contacts.concat(newItem)})
  }

  render() {
    return (
      <div className="App">
        <Instructions />
        <Counter />
      

        {this.state.contacts.map(x => (
          <Contact id={x.id} name={x.name} nickname={x.nickname} hobby={x.hobby} />
        ))} 

      <form>
        <label>
        Contact:
          <input type="text" contact="contact"
          />
        </label>
        
        <button type="submit" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
      </div>
      
    )
  }
}

export default App

/*
<input type="submit" value="Submit" 
        onClick={this.handleSubmit} 
        />

        */
