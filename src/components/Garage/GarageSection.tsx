import React from "react";
import Container from "../Container/Container";
import GarageCard from "./GarageCard";

const cars = [
    { img: "Mini Cooper Convertible", rent: 300 },
    { img: "Ford Mustang GT Convertible", rent: 500 },
    { img: "BMW Z4 Convertible", rent: 700 },
    { img: "Dodge Challenger RT", rent: 700 },
    { img: "BMW 4 Series Coupé", rent: 900 },
    { img: "Chevrolet Camaro", rent: 700 },
    { img: "Audi A5 Convertible", rent: 700 },
    { img: "BMW 2 Series Convertible", rent: 900 },
    { img: "Ford Mustang Convertible", rent: 700 },
    { img: "Lamborghini Centenario LP770", rent: 1500 },
    { img: "Bugatti Veyron", rent: 1200 },
    { img: "Aston Martin DB9", rent: 1000 },
];
const GarageSection = () => {
    return (
        <section key="garage" className="w-full">
            <Container className="pt-[100px] px-6 tablet:px-10 flex flex-col items-center">
                <h1 className="font-display text-white text-6xl  ">Our Fleet</h1>
                <div className="flex justify-center gap-10 tablet:gap-20 laptop:gap-x-5 laptop:gap-y-16 desktop:gap-20 flex-wrap mt-20 mb-36">
                    {cars.map((car) => (
                        <GarageCard key={car.img} img={car.img} rent={car.rent} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default GarageSection;
