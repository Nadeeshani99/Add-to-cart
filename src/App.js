import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const [products] = useState([
    {
      name: 'Pineapple',
      cost: '$0.69',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIW1myUa2GDzyAcML7dPQpJHis2RFd9uMv3A&usqp=CAU'
    },
    {
      name: 'Papaya',
      cost: '$1.09',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QJ7MDeOioCoHDO_C3Uq3lQlVX3qQL6t6xg&usqp=CAU'
    },
    {
      name: 'watermelon',
      cost: '$0.49',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcDPeNt_Uphw5cw6ko2_55HP6HFj9wewX5Q&usqp=CAU'
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <button> Go to Cart ({cart.length}) </button>
      </header>
      <h1>Products</h1>

      {products.map((product, idx) => (
        <div>
          <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src={product.image} alt={product.name} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>

  );
}

export default App;