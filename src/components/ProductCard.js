import { useCart } from '../context/CartContext';
import "./ProductCard.css";
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export const ProductCard = ({product, cart, setCart, cartItem, setCartItem}) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const {id, name, price, image} = product;
  const [isInCart, setIsInCart] = useState(false);

  const handleAdd = (product) => {
    if (cart.some(el => el.id === id)) {
        const updatedCart = cart.map((todo) => (
            todo.id === id ? {id: id, name: name, price: price, image: image, qty: todo.qty + 1} : todo
        ));
        setCart(updatedCart);
    }
    else {
        const newCartItem = {
            id: id,
            name: name,
            price: price,
            image: image,
            qty: 1
        }
        setCart([...cart, newCartItem]);
    }

    setCartItem({});
  }

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);
    if (productIsInCart) {
      setIsInCart(true);
    }
    else {
      setIsInCart(false);
    }
  }, [cartList])

  return (
    <div className="productCard">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <Link to={`/product/${id}`}>
          <p className="name">{name}</p>
        </Link>
        <div className="action">
            <p>${price}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    </div>
  )
}
