import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        let updatedCartList;
        if (state.cartList.find(obj => obj.product === product)) {
            const index = state.cartList.findIndex(obj => obj.product === product);
            if (index >= 0) {
                updatedCartList = state.cartList;
                updatedCartList[index].qty++;
            }
        }
        else {
            updatedCartList = state.cartList.concat({product, qty:1});
        }
        updateTotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.product.id !== product.id);
        updateTotal(updatedCartList);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const  removeOneFromCart = (product) => {
        let updatedCartList;
        if (product.length > 0)
            product = product[0].product;
        if (state.cartList.find(obj => obj.product === product)) {
            const index = state.cartList.findIndex(obj => obj.product === product);
            if (index >= 0) {
                updatedCartList = state.cartList;
                if (updatedCartList[index].qty - 1 === 0) {
                    removeFromCart(updatedCartList[index].product);
                }
                else {
                    updatedCartList[index].qty--;
                    updateTotal(updatedCartList);
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: {
                            products: updatedCartList
                        }
                    })
                }
            }

            
        }
        else {
            console.log('notfound');
        }
    }

    const updateTotal = (cart) => {
        let total = 0;
        cart.forEach(obj => total = total + (obj.product.price*obj.qty));

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        removeOneFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}