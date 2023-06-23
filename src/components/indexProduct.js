
import React from 'react';
import BtnCart from './BtnCart';

function IndexProduct ({name, imageUrl, price}){
  return (
    <div className="pr">
      <div className="productPage_product">
        <div className="slider">
          <img src={imageUrl} alt='1' />
        </div>
        <div className="productPage_product_descr">
          <div className="productPage_product_descr_item">
            <div className="title">
              Состав
            </div>
            <div className="text">
              Наружный Материал: Замша 100%
            </div>
          </div>
          <div className="productPage_product_descr_item">
            <div className="title">
              Подробнее о товаре
            </div>
            <div className="text">
              Модель, созданная в коллаборации с художником KAWS. Сочетание гладкой и фактурной замши, графичный дизайн в привычном стиле художника, свисающая бирка сбоку, обтянутые замшей боковины 'Wings', обтянутая замшей массивная подошва со светящимися в темноте вставками. Каждое изделие проходит строгую процедуру аутентификации, которая позволяет подтвердить состояние вещи, а также историю ее происхождения и владения.
            </div>
          </div>
        </div>
      </div>
      <div className="productPage_descr">
        <div className="productPage_descr_title">{name}</div>
        <div className="productPage_descr_class">
          <div className="class_inf">
            <div className="class_title">Артикул:</div>
            <div className="class_text">5056589</div>
          </div>
          <div className="class_inf">
            <div className="class_title">Доступность:</div>
            <div className="class_text">есть в наличии</div>
          </div>
        </div>
        <div className="productPage_descr_sizes">
          <ul>
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
            <li>41</li>
            <li>42</li>
            <li>43</li>
            <li>44</li>
            <li>45</li>
            <li>46</li>
            <li>47</li>
          </ul>
        </div>
        <div className="productPage_descr_price">{price} р.</div>
        <div className="productPage_descr_purchase">
          <div className="purchase_top">
            <div className="top_count">
              <div className="count_minus">-</div>
              <span>1</span>
              <div className="count_plus">+</div>
            </div>
            <BtnCart className="topBtn">
              <span>В КОРЗИНУ</span>
            </BtnCart>
          </div>
          <div className="purchase_btnClick">КУПИТЬ В 1 КЛИК</div>
        </div>
        <div className="productPage_descr_reviews">
          <div className="productPage_descr_reviews_title">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.625C0 0.455729 0.0618486 0.309245 0.185547 0.185547C0.309245 0.0618491 0.455729 0 0.625 0L9.375 0C9.54427 0 9.69076 0.0618491 9.81445 0.185547C9.93815 0.309245 10 0.455729 10 0.625C10 0.794271 9.93815 0.940755 9.81445 1.06445L5.43945 5.43945C5.31576 5.56315 5.16927 5.625 5 5.625C4.83073 5.625 4.68424 5.56315 4.56055 5.43945L0.185547 1.06445C0.0618486 0.940755 0 0.794271 0 0.625Z" fill="#2C2C2C"/>
            </svg>
            <b>Отзывы (2)</b>
          </div>
          <div className="productPage_descr_reviews_review">
            <div className="productPage_descr_reviews_review_name">
              <div className="stars">
                <svg width="73" height="14" viewBox="0 0 73 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black"/>
                  <path d="M36.5 0L37.9593 4.83688H42.6819L38.8613 7.82624L40.3206 12.6631L36.5 9.67376L32.6794 12.6631L34.1387 7.82624L30.3181 4.83688H35.0407L36.5 0Z" fill="black"/>
                  <path d="M51.5 0L52.9593 4.83688H57.6819L53.8613 7.82624L55.3206 12.6631L51.5 9.67376L47.6794 12.6631L49.1387 7.82624L45.3181 4.83688H50.0407L51.5 0Z" fill="black"/>
                  <path d="M66.5 0.8655L67.72 4.90909L67.7736 5.08688H67.9593H71.9567L68.7072 7.62934L68.5725 7.73473L68.6219 7.89845L69.8534 11.9801L66.6541 9.47687L66.5 9.35633L66.3459 9.47687L63.1466 11.9801L64.3781 7.89845L64.4275 7.73473L64.2928 7.62934L61.0433 5.08688H65.0407H65.2264L65.28 4.90909L66.5 0.8655Z" fill="white" stroke="black" strokeWidth="0.5"/>
                  <path d="M21.5 0L22.9593 4.83688H27.6819L23.8613 7.82624L25.3206 12.6631L21.5 9.67376L17.6794 12.6631L19.1387 7.82624L15.3181 4.83688H20.0407L21.5 0Z" fill="black"/>
                </svg>
              </div>
              <div className="name">valentina308741321</div>
            </div>
            <div className="text">
              Давно покупаю обувь здесь, очередная моя покупка эти кроссовочки. Привлекли внешним классическим видом. Единственный недостаток, со временем растянулись. Рекомендую покупать в Эксклюзив.
            </div>
          </div>
          <div className="productPage_descr_reviews_review">
            <div className="productPage_descr_reviews_review_name">
              <div className="stars">
                <svg width="73" height="14" viewBox="0 0 73 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 0L7.95934 4.83688H12.6819L8.86126 7.82624L10.3206 12.6631L6.5 9.67376L2.6794 12.6631L4.13874 7.82624L0.318133 4.83688H5.04066L6.5 0Z" fill="black"/>
                  <path d="M36.5 0L37.9593 4.83688H42.6819L38.8613 7.82624L40.3206 12.6631L36.5 9.67376L32.6794 12.6631L34.1387 7.82624L30.3181 4.83688H35.0407L36.5 0Z" fill="black"/>
                  <path d="M51.5 0L52.9593 4.83688H57.6819L53.8613 7.82624L55.3206 12.6631L51.5 9.67376L47.6794 12.6631L49.1387 7.82624L45.3181 4.83688H50.0407L51.5 0Z" fill="black"/>
                  <path d="M66.5 0.8655L67.72 4.90909L67.7736 5.08688H67.9593H71.9567L68.7072 7.62934L68.5725 7.73473L68.6219 7.89845L69.8534 11.9801L66.6541 9.47687L66.5 9.35633L66.3459 9.47687L63.1466 11.9801L64.3781 7.89845L64.4275 7.73473L64.2928 7.62934L61.0433 5.08688H65.0407H65.2264L65.28 4.90909L66.5 0.8655Z" fill="white" stroke="black" strokeWidth="0.5"/>
                  <path d="M21.5 0L22.9593 4.83688H27.6819L23.8613 7.82624L25.3206 12.6631L21.5 9.67376L17.6794 12.6631L19.1387 7.82624L15.3181 4.83688H20.0407L21.5 0Z" fill="black"/>
                </svg>
              </div>
              <div className="name">valentina308741321</div>
            </div>
            <div className="text">
              Давно покупаю обувь здесь, очередная моя покупка эти кроссовочки. Привлекли внешним классическим видом. Единственный недостаток, со временем растянулись. Рекомендую покупать в Эксклюзив.
            </div>
          </div>
        </div>

    </div>
    </div>
  )
};



export default IndexProduct;