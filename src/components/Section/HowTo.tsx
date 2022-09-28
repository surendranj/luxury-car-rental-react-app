import React from "react";
import CalendarCheck from "../../Icons/CalendarCheck";
import Car from "../../Icons/Car";
import LocationIcon from "../../Icons/LocationIcon";
import BtnPrimary from "../Buttons/BtnPrimary";
import Card from "../Card/Card";

import Container from "../Container/Container";
import Heading1 from "../Typography/Heading1";

const HowTo = () => {
    return (
        <section className="w-full">
            <Container className="px-6 py-20">
                {/* main */}
                <div className="flex flex-col justify-start items-center gap-y-6">
                    {/* main heading */}
                    <Heading1 className=" text-orange ">How To</Heading1>

                    <Card
                        icon={<LocationIcon />}
                        heading="Choose your location"
                        content="With airport and neighborhood locations in most major cities across the world, we’re ready to get you on your way in exceptional style."
                    />
                    <Card
                        icon={<CalendarCheck />}
                        heading="Pick a date"
                        content="Pick a date that is convenient for you. We are available 24/7 throughout the year."
                    />
                    <Card
                        icon={<Car />}
                        heading="Book your ride"
                        content="Choose a car from over 20 sports and luxury brands."
                    />

                    <BtnPrimary buttonText="Book Now" className="mt-4" />
                </div>
            </Container>
        </section>
    );
};

export default HowTo;
