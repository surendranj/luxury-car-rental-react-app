import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import HeroImage from "../../../public/images/cars/Hero Image-min.png";
import Cta from "./Cta";
import useWinDims from "../../hooks/useWinDims";

const HeroSection = () => {
    const windowSize = useWinDims();
    return (
        <section className="relative w-full h-screen tablet:h-[700px] ">
            <Container className="relative h-full  ">
                {/* Hero Image */}
                <div className="absolute top-0 right-0 h-full w-full tablet:w-9/12 ">
                    <div className="relative h-full w-full  ">
                        <Image
                            src={HeroImage}
                            alt="Hero Image"
                            layout="fill"
                            objectFit="cover"
                            objectPosition={windowSize?.width && windowSize.width < 768 ? "40% 0%" : "50% 0%"}
                        />
                    </div>
                </div>

                <Cta />
            </Container>
        </section>
    );
};

export default HeroSection;
