import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log("I'm started!");
  }

  componentDidMount = () => console.log("I'm Mounted!");

  componentDidUpdate = () => console.log("I'm Updated");

  componentWillUnmount = () => console.log("I'm gonna die");

  // 이렇게 클래스 내의 함수에서 쌩으로 state를 건들면 작동 X
  add_wrong = () => {
    this.state.count += 1;
  };

  // 이렇게 setState를 통해서 하면 작동할 것처럼 보이지만 X
  minus_wrong = () => {
    this.setState({ count: this.count - 1 });
  };

  // 이렇게 setState를 통해서
  // 직접적으로 this.state를 건들지않으면서 해야 작동 O
  add_correct = () => {
    console.log("Add Button Pressed");
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus_correct = () => {
    console.log("MINUS Button Pressed");
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    console.log("I'm rendering!");
    return (
      <div>
        <h2>I wanted to be a good boy... my energy is {this.state.count} </h2>
        <button onClick={this.add_correct}>ADD</button>
        <button onClick={this.minus_correct}>MINUS</button>
      </div>
    );
  }
}

export default App;
