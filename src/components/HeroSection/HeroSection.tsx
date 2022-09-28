import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import HeroImage from "../../../public/images/Hero Image-min.png";
import Cta from "./Cta";
import useWinDims from "../../hooks/useWinDims";

const HeroSection = () => {
    const windowSize = useWinDims();
    return (
        <section className="w-full h-screen relative ">
            <Container className="h-full relative ">
                {/* Hero Image */}
                <div className="relative h-full w-full">
                    <Image
                        src={HeroImage}
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={windowSize?.width && windowSize.width < 768 ? "40% 0%" : "top right"}
                    />
                </div>
                <Cta />
            </Container>
        </section>
    );
};

export default HeroSection;
