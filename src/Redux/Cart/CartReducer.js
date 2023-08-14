import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE } from "./CartTyps";

const initialState = {
  cart:[],
  total:0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.payload.id;
      const index = state.cart.findIndex((p) => p.id === id);
      const updatedItems = [...state.cart];
      if (index < 0) {
        const product = action.payload;

        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      } else {
        const updateItem = { ...updatedItems[index] };
        updateItem.quantity++;
        updatedItems[index] = updateItem;
        return {
          ...state,
          cart: updatedItems,
          total: state.total + action.payload.price,
        };
      }
    }
    case INCREMENT: {
      const id = action.payload.id;
      const index = state.cart.findIndex((p) => p.id === id);
      const updatedProducts = [...state.cart];
      updatedProducts[index].quantity++;
      return {
        ...state,
        cart: updatedProducts,
        total: state.total + action.payload.price,
      };
    }
    case DECREMENT: {
      const id = action.payload.id;
      const index = state.cart.findIndex((p) => p.id === id);
      const updatedProducts = [...state.cart];
      if (action.payload.quantity > 1) {
        updatedProducts[index].quantity--;
        return {
          ...state,
          cart: updatedProducts,
          total: state.total - action.payload.price,
        };
      } else {
        const updatedItems = updatedProducts.filter((p) => p.id !== id);
        return {
          ...state,
          cart: updatedItems,
          total: state.total - action.payload.price,
        };
      }
    }
    case REMOVE: {
      const id = action.payload.id;
      const updatedProducts = [...state.cart];
      const updatedItems = updatedProducts.filter((p) => p.id !== id);
      return {
        ...state,
        cart: updatedItems,
        total: state.total - action.payload.price * action.payload.quantity,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
