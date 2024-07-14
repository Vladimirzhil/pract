import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logoImage from '../Image/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import Order from '../Order';

export default function Header({ orders, updateQuantity, removeFromOrder, calculateTotal }) {
  const [cartOpen, setCartOpen] = useState(false);

  const totalQuantity = orders.reduce((total, order) => total + order.count, 0);

  const showOrders = (orders) => {
    return (
      <div>
        {orders.map(el => (
          <Order key={el.id} item={el} updateQuantity={updateQuantity} removeFromOrder={removeFromOrder} />
        ))}
        <div>
              <b>Общая стоимость: </b>
              <b className='total-cost'>{calculateTotal()}₽</b>
        </div>
        <button className='btn' style={{ position: 'relative', left: '24%' }}>
          <Link to='/form'>К оформлению</Link>
        </button>
      </div>
    );
  }
  
  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Товаров нет</h2>
      </div>
    );
  }

  return (
    <header className='header-container'>
      <img src={logoImage} alt="Гурманика логотип" className='logo-image' />
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link><Link to='/'>Главная</Link></Nav.Link>
            <Nav.Link><Link to='/menu'>Меню</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='cart-container' onClick={() => setCartOpen(!cartOpen)}>
        <FaShoppingCart className={`shop-cart-button ${cartOpen && 'active'}`} />
        {totalQuantity > 0 && !cartOpen && <span className='cart-count'>{totalQuantity}</span>}
      </div>

      {cartOpen && (
        <div className='shop-cart'>
          {orders.length > 0 ? showOrders(orders) : showNothing()}
        </div>
      )}
    </header>
  );
}
