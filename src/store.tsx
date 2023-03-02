import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducer/Reducer";

const store = configureStore({ reducer: rootReducer });

export default store;
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
