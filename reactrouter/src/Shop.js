import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const result = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const data = await result.json();
    setItems(data.data);
  }
  return (
    <div className="App">
      <h1>Shop page</h1>
      {items.map(item => (

        <h1 key={item.item.itemId}>
          <Link to={`/shop/${item.itemId}`}>
            {item.item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
