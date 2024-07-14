import React, { Component } from 'react';
import Modal from 'react-modal';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      // Другие состояния, если они у вас есть
    };

    // Привязка методов к контексту класса
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
      // Обновление других состояний, если это необходимо
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { item, onAdd } = this.props;
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.linktopicture} alt={this.props.item.name} onClick={this.openModal}/>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price}₽</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Item Details"
          className='custom-modal'>
          <img src={"./img/" + item.linktopicture} alt={item.name} onClick={this.closeModal}/>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Состав: {item.compound}</p>
          <p>Калоийность: {item.calories} ккал</p>
          <b>{item.price}₽</b>
          <div className='add-to-cart' onClick={(e) => {
            e.stopPropagation(); // Это предотвратит закрытие модального окна при нажатии на 'add-to-cart'
            onAdd(item);
          }}>+</div>
        </Modal>
      </div>
    );
  }
}

export default Card;
