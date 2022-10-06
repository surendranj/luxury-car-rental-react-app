import { AnimatePresence } from "framer-motion";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import Container from "../Container/Container";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileNavLinks from "./NavLinks/MobileNavLinks";
import NavLinks from "./NavLinks/NavLinks";

const Appbar = () => {
    const { open } = useAppSelector((state) => state);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50  ">
            <Container className="h-[10vh] backdrop-blur-lg flex justify-between items-center gap-x-12 desktop:gap-x-16 px-6 tablet:px-10">
                <Logo />
                <NavLinks />
                <Hamburger />
            </Container>

            {/* for mobile */}
            <AnimatePresence>{open && <MobileNavLinks />}</AnimatePresence>
        </nav>
    );
};

export default Appbar;
