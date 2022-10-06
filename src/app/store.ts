import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";
import testimonialReducer from "../features/testimonial/testimonialSlice";

const store = configureStore({
    reducer: {
        testimonials: testimonialReducer,
        open: mobileNavReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
