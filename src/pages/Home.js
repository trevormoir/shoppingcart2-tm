// import { useState } from 'react'
// import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

import { ProductCard } from "../components/ProductCard"

export const Home = ({products, cart, setCart, cartItem, setCartItem}) => {
    useTitle("Home");
    //use if using json server
    //const [url, setUrl] = useState("http://localhost:8000/products");
    //const { data: products, loading, error } = useFetch(url, { contect: 'ABC'});

    console.log(products)
;  return (
    <main>
        <section className="products">
            {/* <div className="filter"> */}
                {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
                {/* <button className="all" onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button className="onlystock" onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
            </div> */}
            {/* { loading && <p>{error}</p>}
            { error && <p className="loading">Loading products...</p>} */}
            {products && products.map((product) => (
                <ProductCard product={product}  key={product.id} cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} />
            ))}
        </section>
    </main>
  )
}
