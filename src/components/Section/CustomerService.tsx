import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import Engine from "../../../public/images/cars/Engine.png";
import SectionContent from "./SectionContent";

const CustomerService = () => {
    return (
        <section className="w-full h-screen relative tablet:h-[700px] tablet:mt-[150px]">
            <Container className="h-full relative">
                <div className="absolute top-0 right-0 h-full w-full tablet:w-9/12 ">
                    <div className="relative h-full w-full  ">
                        <Image
                            src={Engine}
                            alt="Image of car engine"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top right"
                        />
                    </div>
                </div>

                <SectionContent
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    gradient="bg-gradient-to-br from-[#252525] to-[rgba(255, 255, 255, 0)]"
                    h1Text="Superior Customer Service"
                    pText="  Experience exotic car rentals from the brand known for award-winning customer service."
                    className="tablet:left-10 tablet:w-[450px]"
                />
            </Container>
        </section>
    );
};

export default CustomerService;
