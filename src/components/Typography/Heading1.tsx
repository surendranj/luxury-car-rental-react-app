import React from "react";

type Heading1Props = {
    className?: string;
    children: React.ReactNode;
};

const Heading1 = ({ className, children }: Heading1Props) => {
    return <h1 className={`font-display text-6xl text-white ${className}`}>{children}</h1>;
};

export default Heading1;
