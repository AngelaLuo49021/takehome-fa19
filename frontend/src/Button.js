import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <p>
          Pass a 'complete' prop to the instructions component in <code>src/App.js</code>. See the README for more details. If you are successful, you'll see another line below saying you've completed this part.
        </p>
        <br />
        <p hidden={!this.props.complete}>
          Completed Part 11111!
        </p>
      </div>
    )
  }
}

export default 
button

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "bar" };
  }

  baz() {
    this.setState({ text: "baz" });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.baz()}>baz</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

ReactDOM.render(<Foo />, document.getElementById("root"));