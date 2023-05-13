
import React from "react";
import ImageSn from '../img/photo1.jpg';
import BtnCart from './BtnCart';

function IndexProduct({name, imageUrl, price}){
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
        <div className="productPage_descr_reviews"></div>
        <div className="productPage_descr_icon"></div>
      </div>
    </div>
  )
};



export default IndexProduct;