
import React, {useState} from "react";
import PropTypes from 'prop-types';
import BtnCart from '../BtnCart';
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';

function IndexSneakersBlock ({ id, imageUrl, name, price, sizes, onClickAddSneakers, onClickAddProduct /*addedCount*/  } ) {
    const history = useHistory();
    const [activeSizes, setActiveSizes] = useState(0);

    const availableSizes = [ 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47 ];

    const onSelectSize = ( index ) => {
        setActiveSizes( index );
    };
    // const onAddSneakers = () => {
    //     const obj = {
    //         id,
    //         name,
    //         imageUrl,
    //         price,
    //         size: availableSizes[ activeSizes ],
    //     }
    //     onClickAddSneakers(obj)
    // };

    const onAddProduct = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price
        };
        onClickAddProduct(obj);
    };



    return (

        <div  className="sneakersBlock-cart">
            {/*<div className="sneakersBlock-cart_image" onClick={onAddProduct}>*/}
            <div className="sneakersBlock-cart_image" onClick={() => history.push( "/product" + id)}>
                <img className="sneakersBlock-cart_img" src={ imageUrl } alt="img1"/>
            </div>
            <Link to="/product"  className="sneakersBlock-cart_title" >{ name }</Link>
            <div className="sneakersBlock-cart_selector">
                <ul className="rer">
                    {
                        availableSizes.map( ( size, index ) =>
                            (
                              <li
                                key={ size }
                                onClick={ () => onSelectSize( index )}
                                className={classNames({
                                    active: activeSizes === index,
                                    disabled: !sizes.includes(size),
                                  }
                                )}
                              > { size }
                              </li>
                            )
                        )
                    }

                </ul>
            </div>
            <div className="sneakersBlock-cart_bottom">
                <div className="sneakersBlock-cart_bottom_price">{ price } р.</div>

                <BtnCart  className="sneakersBlock-cart_bottom_btn">
                    <span>В КОРЗИНУ</span>
                </BtnCart>

            </div>
        </div>

    )
}

IndexSneakersBlock.prototype = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onAddSneakers: PropTypes.func
    //addedCount: PropTypes.number
};

IndexSneakersBlock.defaultProps = {
    name: '---',
    price: 0,
    sizes:[],
}

export default IndexSneakersBlock;