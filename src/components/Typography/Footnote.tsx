import React from "react";

type FootnoteProps = {
    className?: string;
    children: React.ReactNode;
};
const Footnote = ({ className, children }: FootnoteProps) => {
    return <p className={`text-white text-[12px] ${className}`}>{children}</p>;
};

export const Footnote2 = ({ className, children }: FootnoteProps) => {
    return <p className={`text-white text-[10px] font-light ${className}`}>{children}</p>;
};

export default Footnote;
