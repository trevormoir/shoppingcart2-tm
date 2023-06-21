import "./CartCard.css";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartCard = ({product, cart, setCart, qty}) => {
  const { removeFromCart, removeOneFromCart, cartList } = useCart();
  const {id, name, price, image} = product;

  const handleQty = (id) => {
    if (parseInt(document.getElementById("selected-"+id).value) === 0) {
      const product = cartList.filter(obj => obj.product.id === id);
      removeFromCart(product[0].product);
    }
    else {
      const product = cartList.filter(obj => obj.product.id === id);
      removeOneFromCart(product);
    }
  }

  return (
      <div className="cartCard">
        <Link to={`/product/${id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <Link to={`/product/${id}`}>
        <p className="productName">{product.name}</p>
        </Link>
        <p className="productPrice">
          <select id={`selected-${product.id}`} defaultValue={qty} onChange={() => handleQty(product.id)}>
            {[...Array((qty+1))].map((x, i) =>
              <option value={i} key={i}>{i}</option>
            )}
          </select> x ${product.price}</p>
        <p className="productPrice">${(product.price*qty).toFixed(2)}</p>
        <button onClick={() => {removeFromCart(product)}}>Remove</button>
      </div>
  )
}
