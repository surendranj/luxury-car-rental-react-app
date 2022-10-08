import Head from "next/head";
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
            <Head>
                <title>Top Down</title>
                <link rel="icon" href="/images/icons/Logo.svg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Appbar />
            <Transition>
                <main>{children}</main>
                <Footer />
            </Transition>
        </div>
    );
};

export default Layout;
