import { createSlice } from "@reduxjs/toolkit";
import Avatar from "../../../public/images/avatar/avatar.jpg";
import Avatar1 from "../../../public/images/avatar/avatar1.jpg";
import Avatar2 from "../../../public/images/avatar/avatar2.jpg";

const initialState = [
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium, sapien a euismod laoreet, neque dolor viverra justo, at ultricies magna nibh eget massa. Duis sit amet tellus vehicula, efficitur nisi id, cursus nisl. ",
        avatar: Avatar,
        name: "Wade Warren",
        title: "CEO, Figbe",
    },
    {
        testimonial:
            "In a ornare lectus. Etiam ac quam nisi. Nulla dolor magna, blandit et feugiat a, tincidunt ac orci. Nam a facilisis dolor, eget ultrices leo. Donec nec sodales massa. Curabitur sit amet justo tincidunt, ultrices nibh in, egestas erat.",
        avatar: Avatar1,
        name: "Aiony Haust",
        title: "CTO, Adoma",
    },
    {
        testimonial:
            "Integer lobortis magna in nulla elementum efficitur. Mauris pharetra aliquam est facilisis commodo. Ut sed nulla et dolor elementum laoreet. Vestibulum eleifend leo nec ipsum rutrum dignissim vel ac enim. Donec accumsan fermentum libero vitae hendrerit. Etiam odio diam, tristique quis lorem a, elementum finibus felis. In elementum nisl eget dictum ornare. ",
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
