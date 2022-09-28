import React from "react";

type Heading6Props = {
    className?: string;
    children: React.ReactNode;
};

const Heading6 = ({ className, children }: Heading6Props) => {
    return <h6 className={`${className}`}>{children}</h6>;
};

export default Heading6;
