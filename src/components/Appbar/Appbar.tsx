import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks/NavLinks";

const Appbar = () => {
    return (
        <nav className="h-[10vh] fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
            <Container className="flex justify-between gap-x-12 desktop:gap-x-16">
                <Logo />
                <NavLinks />
            </Container>
        </nav>
    );
};

export default Appbar;
