import React from "react";

const ArrowRight = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline"
        >
            <path
                d="M3 7.66667H13.6667M9 3L13.6667 7.66667L9 12.3333"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white stroke-[1.33]"
            />
        </svg>
    );
};

export const ArrowLeft = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.541016 10.291L11.6094 0.68457C11.6943 0.611328 11.8027 0.570312 11.917 0.570312H14.5098C14.7266 0.570312 14.8262 0.839844 14.6621 0.980469L4.40234 9.88672H21.5469C21.6758 9.88672 21.7812 9.99219 21.7812 10.1211V11.8789C21.7812 12.0078 21.6758 12.1133 21.5469 12.1133H4.40527L14.665 21.0195C14.8291 21.1631 14.7295 21.4297 14.5127 21.4297H11.832C11.7764 21.4297 11.7207 21.4092 11.6797 21.3711L0.541016 11.709C0.439594 11.6208 0.358274 11.5119 0.302547 11.3896C0.24682 11.2672 0.217985 11.1344 0.217985 11C0.217985 10.8656 0.24682 10.7328 0.302547 10.6104C0.358274 10.4881 0.439594 10.3792 0.541016 10.291Z"
                fill="#EFEFEF"
            />
        </svg>
    );
};

export default ArrowRight;
