import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import listSaga from "./ListSaga";
import createSagaMiddleware from "redux-saga";
import newUserRegistration from "../registration/saga.registration";
import loginUser from "../login/saga.login";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(listSaga);
sagaMiddleware.run(newUserRegistration);
sagaMiddleware.run(loginUser);
export default store;
