import type { NextPage } from "next";
import Appbar from "../src/components/Appbar/Appbar";
import HeroSection from "../src/components/HeroSection/HeroSection";
import Brands from "../src/components/Section/Brands";
import CustomerService from "../src/components/Section/CustomerService";
import Footer from "../src/components/Section/Footer";
import HowTo from "../src/components/Section/HowTo";
import RentTheLuxury from "../src/components/Section/RentTheLuxury";
import Testimonials from "../src/components/Section/Testimonials";

const Home: NextPage = () => {
    return (
        <div className="bg-black">
            <Appbar />
            <HeroSection />
            <RentTheLuxury />
            <CustomerService />
            <HowTo />
            <Brands />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
