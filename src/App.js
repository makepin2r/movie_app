import React from "react";

// class component
class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState({count: this.state.count + 1}); // 퍼포먼스 이슈가 있을 수 있다. 외부의 state에 의존하는 경우.
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1})); // 이게 좋은 방법
  };

  // Mounting
  constructor(props){
    super(props);
    console.log("hello");
  }  
  componentDidMount(){
    console.log("component rendered");
  }

  // Updating
  componentDidUpdate(){
    console.log("component updated");
  }

  // Unmounting
  componentWillUnmount(){
    console.log("Goodbye");
  }

  render(){
    console.log("I am rendering");
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>;
  }

}

export default App;
