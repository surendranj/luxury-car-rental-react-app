import React, { useState } from "react";
import Container from "../Container/Container";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileNavLinks from "./NavLinks/MobileNavLinks";
import NavLinks from "./NavLinks/NavLinks";

const Appbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50  ">
            <Container className="h-[10vh] backdrop-blur-lg flex justify-between items-center gap-x-12 desktop:gap-x-16 px-6 desktop:px-0">
                <Logo />
                <NavLinks />
                <Hamburger open={open} setOpen={setOpen} />
            </Container>

            {/* for mobile */}
            {open && <MobileNavLinks />}
        </nav>
    );
};

export default Appbar;
