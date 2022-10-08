import { createSlice } from "@reduxjs/toolkit";
import Avatar from "../../../public/images/avatar/avatar.jpg";
import Avatar1 from "../../../public/images/avatar/avatar1.jpg";
import Avatar2 from "../../../public/images/avatar/avatar2.jpg";

const initialState = [
    {
        testimonial:
            "Fantastic car company. It was a no fuss pick up and return. Very helpfull staff, will book again. Thankyou",
        avatar: Avatar,
        name: "Wade Warren",
        title: "CEO, Figbe",
    },
    {
        testimonial:
            "Very happy with my choice of vehicle very economical clean tidy and the most friendliest of staff thank-you THRIFTY would recommend your service without hesitation..",
        avatar: Avatar1,
        name: "Aiony Haust",
        title: "CTO, Adoma",
    },
    {
        testimonial:
            "In the past I have always rented cars straight from the agencies, so this was a first. But I am very pleased and will definitely use Top Down again. The price was much lower than I could find at any of the agencies, which is always nice when you don't want the smallest car in the fleet. And the service was excellent all the way. Best service I think I have ever gotten. Will recommend Top Down to anyone. ",
        avatar: Avatar2,
        name: "Albert Dera",
        title: "Analyst, BitBug",
    },
];

const testimonialSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {
        rightClick: (state) => {
            state.push(state.shift()!);
        },
        leftClick: (state) => {
            state.unshift(state.pop()!);
        },
    },
});

export default testimonialSlice.reducer;
export const testimonialActions = testimonialSlice.actions;
