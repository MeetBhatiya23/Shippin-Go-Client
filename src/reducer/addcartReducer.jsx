import Cart from "../components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function addcartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
        let { modelName, images, colours, price, selectedSize, singleProducts, selectedColorq, colourCollection } = action.payload;

        let CartProduct = {
            id: singleProducts._id + colourCollection,
            modelName: modelName,
            colours: colourCollection,
            images: selectedColorq,
            offers: singleProducts.offers,
            prices: singleProducts.price,
            max: singleProducts.stock,
            amount: 1,
            size: selectedSize
        };

        let existingProduct = state.cart.find(cartItem => cartItem.id === CartProduct.id);

        let updatedCart;
        if (existingProduct) {
            updatedCart = state.cart.map(cartItem => {
                if (cartItem.id === CartProduct.id) {
                    if (cartItem.amount < cartItem.max) {
                        // Increment amount if stock is available
                        return { ...cartItem, amount: cartItem.amount + 1 };
                    } else {
                        // Show toast notification if stock limit is reached

                        // toast.error("Not enough stock available!");
                        return cartItem; // Return the item without incrementing
                    }
                }
                return cartItem;
            });
        } else {
            // Add new product to cart if it does not exist
            updatedCart = [...state.cart, CartProduct];
        }

        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "TOTAL_ITEM") {
        let total_item = (state.cart || []).reduce((initialVal, curElem) => {
            let { amount } = curElem;
            initialVal = initialVal + amount;
            return initialVal;
        }, 0);
        return {
            ...state,
            total_item
        };
    }


    if (action.type === "TOTAL_PRICE") {
        let total_price = (state.cart || []).reduce((initialVal, curElem) => {
            let { prices, amount, offers } = curElem;
            let Filterprice = prices * (100 - offers) / 100;
            const total = Filterprice * amount;
            initialVal += total;
            console.log(initialVal, "curElem=-================================");
            return initialVal;
        }, 0);
        return {
            ...state,
            total_price
        };
    }

    // console.log(total_price);

    // products plus or minus qty

    if (action.type === "SET_PLUSAMOUNT") {
        let updateCart = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {
                // Set default value to 1 if curElem.amount is falsy (e.g., 0, undefined, etc.)
                let plus = curElem.amount ? curElem.amount + 1 : 1;

                // Ensure the amount doesn't exceed the maximum limit
                if (plus >= curElem.max) {
                    plus = curElem.max;

                    toast("😅 Not more stock available!", {
                        position: "bottom-right",
                        className: "foo-bar",
                    });
                }

                return {
                    ...curElem,
                    amount: plus
                };
            } else {
                return curElem;
            }
        });

        return { ...state, cart: updateCart };
    }

    if (action.type === "SET_MINUSAMOUNT") {
        console.log("state.cart*********0", state.cart);

        const updateCart = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let minus = curElem.amount - 1
                if (minus <= 1) {
                    minus = 1
                    toast.error(" Not more minus stock!", {
                        position: "bottom-right",
                        className: "foo-bar",
                    });
                }
                return {
                    ...curElem,
                    amount: minus
                }
            }
            else {
                return curElem
            }

        })
        return { ...state, cart: updateCart }
    }

    // REMOVE ITEM

    if (action.type === "REMOVR_ITEM") {
        let updateCart = state.cart.filter((curelem) => curelem.id !== action.payload)

        return {
            ...state,
            cart: updateCart
        }
    }
    return state;
}

export default addcartReducer