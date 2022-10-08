import React from "react";
import Appbar from "../Appbar/Appbar";
import Transition from "../PageTransition/Transition";
import Footer from "../Section/Footer";

type LayoutProps = {
    children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-black min-h-screen">
            <Appbar />
            <Transition>
                <main>{children}</main>
                <Footer />
            </Transition>
        </div>
    );
};

export default Layout;
