import React, { Component } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

export class Order extends Component {

  changeQuantity = (amount) => {
    // Проверяем, не станет ли количество меньше 1
    if (this.props.item.count + amount >= 1) {
      // Вызов функции из props для обновления количества
      this.props.updateQuantity(this.props.item.id, amount);
    } else {
      // Если количество равно 0, удаляем товар из заказа
      this.props.removeFromOrder(this.props.item.id);
    }
  };

  render() {
    const { item } = this.props;
    return (
      <div className='item-order'>
        <img src={"./img/" + this.props.item.linktopicture} alt={this.props.item.name} />
        <h2>{this.props.item.name}</h2>
        <b>{this.props.item.price}₽</b>
          <p onClick={() => this.changeQuantity(1)} className='buttonchangeplus'>+</p>
          <span className='change'>{item.count}</span>
          <p onClick={() => this.changeQuantity(-1)} className='buttonchangeminus'>-</p>
          <FaRegTrashAlt onClick={() => this.props.removeFromOrder(item.id)} className='trash'/>
      </div>
    )
  }
}

export default Order