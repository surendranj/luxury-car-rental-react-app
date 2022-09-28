import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import Engine from "../../../public/images/Engine.png";
import SectionContent from "./SectionContent";

const CustomerService = () => {
    return (
        <section className="w-full h-screen relative">
            <Container className="h-full relative">
                <Image
                    src={Engine}
                    alt="Image of car engine"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top right"
                />

                <SectionContent
                    gradient="bg-gradient-to-br from-[#252525] to-[rgba(255, 255, 255, 0)]"
                    h1Text="Superior Customer Service"
                    pText="  Experience exotic car rentals from the brand known for award-winning customer service."
                />
            </Container>
        </section>
    );
};

export default CustomerService;
