import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "taco",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGFjb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 5.0
  },
  {
    id:2,
    name: "ramen",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 5.0
  },
  {
    id:3,
    name: "chocolate",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 5.0
  },
  {
    id:4,
    name: "pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 5.0
  }
];

function Food({name, pic, rating}) {
  return <div>
    <h2>I Like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={pic} alt={name}/>
  </div>;
}

// prop types
Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return <div>
      {/* {console.log(foodILike.map(renderFood) )} */}
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating}/>)}
  </div>;
}

export default App;
