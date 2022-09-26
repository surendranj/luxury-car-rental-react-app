import type { NextPage } from "next";
import Appbar from "../src/components/Appbar/Appbar";
import HeroSection from "../src/components/HeroSection/HeroSection";

const Home: NextPage = () => {
    return (
        <div className="bg-black">
            <Appbar />
            <HeroSection />
            <HeroSection />
        </div>
    );
};

export default Home;
