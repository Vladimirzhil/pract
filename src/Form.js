import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Order from './Order';
import InputMask from 'react-input-mask';

export default function Form({ orders, updateQuantity, removeFromOrder, calculateTotal }) {
  const [name, setCustomerName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymenttype, setPaymentMethod] = useState(''); // Добавляем состояние для способа оплаты
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datetime = new Date().toISOString(); // Получаем текущую дату и время в формате ISO
    const orderData = {
      name,
      phonenumber,
      address,
      paymenttype, // Добавляем способ оплаты в данные заказа
      orders,
      datetime, // Добавляем дату и время в данные заказа
      sum: calculateTotal(), // Добавляем общую стоимость в данные заказа
    };

    try {
      const response = await fetch('https://your-backend-endpoint.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Заказ отправлен:', orderData);
        setIsOrderSubmitted(true);
      } else {
        console.error('Ошибка при отправке заказа');
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='order-form'>
        <div>
          <label>ФИО:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Номер телефона:</label>
          <InputMask
            mask="+7 (999) 999-99-99"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          >
            {(inputProps) => <input {...inputProps} type='tel' />}
          </InputMask>
        </div>
        <div>
          <label>Адрес:</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Способ оплаты:</label>
          <select
            value={paymenttype}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value=''>Выберите способ оплаты</option>
            <option value='cash'>Наличная оплата</option>
            <option value='card'>Безналичная оплата</option>
          </select>
        </div>
        <div>
          {orders.map((order) => (
            <Order
              key={order.Id}
              item={order}
              updateQuantity={updateQuantity}
              removeFromOrder={removeFromOrder}
            />
          ))}
        </div>
        <div>
          <c>Общая стоимость: </c>
          <c className='total-cost'>{calculateTotal()}₽</c>
        </div>
        <button type='submit' className='btn'>Отправить заказ</button>
      </form>

      {isOrderSubmitted && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setIsOrderSubmitted(false)}>&times;</span>
            <p>Заказ оформлен!</p>
          </div>
        </div>
      )}
    </div>
  );
}
