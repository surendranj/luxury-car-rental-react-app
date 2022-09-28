import React from "react";
import Container from "../Container/Container";
import Lamborghini from "../../../public/images/Lamborghini.png";
import Image from "next/image";
import SectionContent from "./SectionContent";

const RentTheLuxury = () => {
    return (
        <section className="w-full h-screen relative">
            <Container className="h-full relative">
                <Image
                    src={Lamborghini}
                    alt="Image of Lamborghini"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top left"
                />

                <SectionContent
                    gradient="bg-gradient-to-bl from-[#252525] to-[rgba(255, 255, 255, 0)]"
                    h1Text="Rent the luxury Own the thrill"
                    pText="From exotic sports cars to luxury sedans and SUVs, the Exotic Car Collection by Top Down
                            offers an exceptional selection and trusted, personalized service."
                />
            </Container>
        </section>
    );
};

export default RentTheLuxury;
