function Food(props) {
  return <h3>I Like {props.name}</h3>;
}

function App() {
  return <div>
    <h1>Hello</h1>
    <Food name="kimchi" />
    <Food name="ramen" />
    <Food name="taco" />
  </div>;
}

export default App;
