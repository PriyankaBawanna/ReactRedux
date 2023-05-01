import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const cartData = (data = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer Called ", action);
      return action.data;
    case PRODUCT_LIST:
      console.warn("PRODUCT_LIST condition ", action);
      return [action.data];
    case SET_PRODUCT_LIST:
      console.warn("SET_PRODUCT_LIST condition ", action.data);
      return [...action.data];
    default:
      return "No action called ";
  }
};
