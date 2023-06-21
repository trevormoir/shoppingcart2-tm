import { useCart } from '../context/CartContext';
import "./ProductCard.css";

import { Link } from 'react-router-dom';

export const ProductCard = ({product, cart, setCart, cartItem, setCartItem}) => {
  const { addToCart } = useCart();
  const {id, name, price, image} = product;
  // const [isInCart, setIsInCart] = useState(false);

  // useEffect(() => {
  //   const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);
  //   if (productIsInCart) {
  //     setIsInCart(true);
  //   }
  //   else {
  //     setIsInCart(false);
  //   }
  // }, [cartList, product.id])

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
