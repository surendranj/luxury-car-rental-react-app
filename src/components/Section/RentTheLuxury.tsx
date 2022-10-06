import React from "react";
import Container from "../Container/Container";
import Lamborghini from "../../../public/images/cars/Lamborghini.png";
import Image from "next/image";
import SectionContent from "./SectionContent";

const RentTheLuxury = () => {
    return (
        <section className="relative  w-full h-screen tablet:h-[700px] tablet:mt-[150px]">
            <Container className="relative h-full overflow-x-hidden ">
                <div className="relative h-full w-full tablet:w-9/12 ">
                    <Image
                        src={Lamborghini}
                        alt="Image of Lamborghini"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top left"
                    />
                </div>

                <SectionContent
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
