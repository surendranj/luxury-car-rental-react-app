import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return <div className={`w-full h-full max-w-custom mx-auto px-2 tablet:px-5 ${className}`}>{children}</div>;
};

export default Container;
