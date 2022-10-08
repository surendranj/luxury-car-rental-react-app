import { NextPage } from "next";
import React from "react";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Brands from "../src/components/Section/Brands";
import Testimonials from "../src/components/Section/Testimonials/Testimonials";

const AboutUsPage: NextPage = () => {
    return (
        <>
            <AboutUs />
            <Brands />
            <Testimonials />
        </>
    );
};

export default AboutUsPage;
