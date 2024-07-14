import React, { useState } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from "./Menu";
import Form from './Form';

function App() {
  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    setOrders(prevOrders => {
      const existingItem = prevOrders.find(order => order.id === item.id);
      if (existingItem) {
        return prevOrders.map(order => 
          order.id === item.id ? { ...order, count: order.count + 1 } : order
        );
      } else {
        return [...prevOrders, { ...item, count: 1 }];
      }
    });
  };
  
  const updateQuantity = (itemid, amount) => {
    setOrders(prevOrders => prevOrders.map(order => {
      if (order.id === itemid) {
        const updatedQuantity = order.count + amount;
        if (updatedQuantity <= 0) {
          return null;
        }
        return { ...order, count: updatedQuantity };
      }
      return order;
    }).filter(order => order != null));
  };
  
  const removeFromOrder = (itemid) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== itemid));
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => total + order.count * order.price, 0);
  };
  
  return (
    <>
      <BrowserRouter>
      <Header orders={orders} updateQuantity={updateQuantity} removeFromOrder={removeFromOrder} calculateTotal={calculateTotal} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu addToOrder={addToOrder}/>}/>
          <Route path="/form" element={<Form orders={orders} updateQuantity={updateQuantity} removeFromOrder={removeFromOrder} calculateTotal={calculateTotal}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
