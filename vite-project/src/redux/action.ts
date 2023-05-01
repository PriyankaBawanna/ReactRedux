import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const addToCart = (data: any) => {
  console.log("Action Called ", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const list = () => {
  return {
    type: PRODUCT_LIST,
  };
};
