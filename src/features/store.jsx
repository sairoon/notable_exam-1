import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./NoteSlice";

const store = configureStore({
  reducer: {
    note: NoteSlice,
  },
});

export default store;
