import React from "react";
import Appbar from "../Appbar/Appbar";
import Footer from "../Section/Footer";

type LayoutProps = {
    children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-black min-h-screen">
            <Appbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
