import React, { Component } from 'react'

export class Type extends Component {
    constructor(props){
        super(props)
        this.state={
            type:[
                {
                    key:'all',
                    name:'Всё'
                },
                {
                    key:'Горячее',
                    name:'Горячее'
                },
                {
                    key:'Гарниры',
                    name:'Гарниры'
                },
                {
                    key:'Блины и завтрак',
                    name:'Блины и завтрак'
                },
                {
                    key:'Салаты',
                    name:'Салаты'
                },
                {
                    key:'Закуски',
                    name:'Закуски'
                },
                {
                    key:'Напитки',
                    name:'Напитки'
                },
                {
                    key:'Кондитерские изделия',
                    name:'Кондитерские изделия'
                },
                {
                    key:'Выпечка',
                    name:'Выпечка'
                },  
            ]
        }
    }
  render() {
    return (
      <div className='type'>
        {this.state.type.map(el =>(
            <div key={el.key} className='type-item' onClick={()=> this.props.chooseType(el.key)}>{el.name}</div>
            ))}
      </div>
    )
  }
}

export default Type