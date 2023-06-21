import { useEffect, useState, useMemo } from 'react';

import './App.css';

import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from "./components";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [cartItem, setCartItem] = useState({});
  
  // const initProducts = [
  //   {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
  //   {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
  //   {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
  //   {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
  //   {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
  //   {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
  // ]

  const initProducts = useMemo(() => [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
  ],[])

  const [products, setProducts] = useState(initProducts);
  
  useEffect(() => { //evaluates only once!
      localStorage.setItem("cart", JSON.stringify(cart));
      setProducts(initProducts);
    },
    [cart, initProducts]); //runs everytime cart is updated


  return (
    <div className="App">
      <Header cart={cart} />
      <AllRoutes products={products} cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} />
      <Footer />
    </div>
  );
}

export default App;
