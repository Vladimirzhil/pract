import React from 'react'
import Slider from "./Components/Slider";
import About from './Image/about.png';

export default function Home() {
  return (
    <>
     <Slider/>
     <div>
      <h1 className='text-centr'>О нас</h1>
        <div className="container">
          <img src={About} alt="About"/>
          <p>
           «Гурманика» - это пищевое производство полного цикла. Осуществляет поставку готовой кулинарной и кондитерской продукции в продовольственные магазины города и для частных заказов. Салаты и закуски, ланч-фуд, вторые блюда, хлебобулочные и кондитерские изделия и многое другое… Перед тем, как попасть на полки, наша продукция проходит жёсткий контроль отдела качества. Мы сотрудничаем только с проверенными поставщиками сырья, используем только натуральные ингредиенты. Ежедневные поставки - это наша гарантия свежести. Абсолютно все блюда мы готовим сами и с душой. Все эти факторы говорят об отличном качестве и неповторимом вкусе. Сегодня «Гурманика» выходит в онлайн, чтобы стать доступнее и удобнее для потребителя. Мы рады предложить вам блюда для ежедневного потребления, так и для праздничных тождеств. Мы для тех, кто ценит своё время и для кого качество и вкус имеет большое значение.
          </p>
        </div>
     </div>
    </>
  )
}
