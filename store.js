import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './createslice'; // make sure path is correct

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;