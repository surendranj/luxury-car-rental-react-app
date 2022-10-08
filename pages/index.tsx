import type { NextPage } from "next";
import HeroSection from "../src/components/HeroSection/HeroSection";
// import Brands from "../src/components/Section/Brands";
import CustomerService from "../src/components/Section/CustomerService";
import HowTo from "../src/components/Section/HowTo";
import RentTheLuxury from "../src/components/Section/RentTheLuxury";
// import Testimonials from "../src/components/Section/Testimonials/Testimonials";

const Home: NextPage = () => {
    return (
        <>
            <HeroSection />
            <RentTheLuxury />
            <CustomerService />
            <HowTo />
            {/* <Brands />
            <Testimonials /> */}
        </>
    );
};

export default Home;
