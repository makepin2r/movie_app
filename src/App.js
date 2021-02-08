function Food({name, pic}) {
  return <div>
    <h2>I Like {name}</h2>
    <img src={pic} alt=""/>
  </div>;
}

const foodILike = [
  {
    name: "taco",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGFjb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  },
  {
    name: "ramen",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  },
  {
    name: "chocolate",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  },
  {
    name: "pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  }
];

function renderFood(dish) {
    return <Food name={dish.name} pic={dish.image}/>;
}

function App() {
  return <div>
      {foodILike.map(renderFood)}
  </div>;
}

export default App;
