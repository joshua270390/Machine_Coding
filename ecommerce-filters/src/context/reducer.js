export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, {...action.payload, qty:1}]
      };
    
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id) 
      };

    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload.id ? {...item, qty:action.payload.qty} : item)
      };

    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {...state, sort: action.payload};
    case "FILTER_BY_STOCK":
      return {...state, byStock: JSON.parse(action.payload)};
    case "FILTER_BY_RATING":
      return {...state, byRating: action.payload};
    case "FILTER_BY_SEARCH":
      return {...state, searchQuery: action.payload};
    case "FILTER_BY_TAB":
      return {...state, byTab:action.payload}
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byRating: 0,
        searchQuery: "",
        byTab: "All"
      };

    default:
      return state;
  }
};
