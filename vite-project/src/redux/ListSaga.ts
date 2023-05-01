import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
function* getListItem() {
  console.log("Api call here ");
  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();
  console.log("action Called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}
function* listSaga() {
  yield takeEvery(PRODUCT_LIST, getListItem);
}
export default listSaga;
