import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function ItemDetail() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
      const itemData = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=2fad344-834e456-dcf643d-91f9712`);
      const data = await itemData.json();
      console.log(data.data.item)
      setItem(data.data.item);

  }
  return (
    <div className="App">
      <h1>Items</h1>
      <pre>{item.name}</pre>
    </div>
  );
}

export default ItemDetail;
