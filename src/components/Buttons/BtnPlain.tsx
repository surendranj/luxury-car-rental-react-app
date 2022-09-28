import React from "react";

type BtnPlainProps = {
    className?: string;
};

const BtnPlain = ({ className }: BtnPlainProps) => {
    return (
        <button className={`text-sm flex justify-start items-center gap-x-3 ${className}`}>
            <span>Explore</span>
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
        </button>
    );
};

export default BtnPlain;
