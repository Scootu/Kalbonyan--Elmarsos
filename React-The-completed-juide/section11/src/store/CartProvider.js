import { useReducer } from "react";
import CartContext from "./cartcontext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount:existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }else { 
    return defaultCart;
  }

  
};

const CartProvider = (props) => {
  const [CartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    //  cartDataContext.item.push(item);
    //  console.log(cartDataContext.item);
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {};

  const cartDataContext = {
    item: CartState.items,
    totalAmount: CartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartDataContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
