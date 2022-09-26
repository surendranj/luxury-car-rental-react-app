import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return <div className={`w-full max-w-custom mx-auto  ${className}`}>{children}</div>;
};

export default Container;
