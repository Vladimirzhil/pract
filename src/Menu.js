import React, { useState, useEffect } from 'react';
import Items from './Items';
import Type from './Type';

export default function Menu({ addToOrder }) {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/Product/Get')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setCurrentItems(data); // Установка начального значения currentItems
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chooseType = (type) => {
    if (type === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter(item => item.type === type));
    }
  }

  return (
    <div>
      <Type chooseType={chooseType}/>
      <Items items={currentItems} onAdd={addToOrder} />
    </div>
  );
}
