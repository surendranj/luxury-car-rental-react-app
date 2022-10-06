import React from "react";

type ParagraphProps = {
    className?: string;
    children: React.ReactNode;
};

const Paragraph = ({ className, children }: ParagraphProps) => {
    return <p className={`text-white text-sm opacity-80 ${className}`}>{children}</p>;
};

export default Paragraph;
