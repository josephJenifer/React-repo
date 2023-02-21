import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='display-item'>
                            <div>
                                <img src={cartItem.url} width={250} />
                            </div>
                            <div className='item-quantity'>
                                <div className='item-name'> {cartItem.name} </div>
                                <button className='item-reduce'
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                        })
                                        setCART(_CART)
                                    }}
                                >-</button>
                                <div className='item-quantity'> {cartItem.quantity} </div>
                                <button className='item-increase'
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                        })
                                        setCART(_CART)
                                    }}
                                >+</button>
                                <div className='item-sum'> Rs. {cartItem.price * cartItem.quantity} </div>
                            </div>
                        </div>
                    )
                })
            }

            <p className='item-total'> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            <div className='btn-cont'>
                <button className='btn-buy'>Buy Now</button></div>
        </div >
    )
}

export default CartList