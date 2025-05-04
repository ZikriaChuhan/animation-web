"use client"
import "./component.css"
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card1 from "../images/heroSection/card1.png";
import Card2 from "../images/heroSection/card2.png";
import Card3 from "../images/heroSection/card3.png";
import Card4 from "../images/heroSection/card4.png";

const cards = [
    {
        title: "3D ANIMATION",
        image: Card2,
    },
    {
        title: "2D ANIMATION",
        image: Card1,
    },
    {
        title: "GAMING TRAILER",
        image: Card4,
    },
    {
        title: "LOGO ANIMATION",
        image: Card3,
    },
    {
        title: "2D ANIMATION",
        image: Card1,
    },
    {
        title: "3D ANIMATION",
        image: Card2,
    },
    {
        title: "LOGO ANIMATION",
        image: Card3,
    },
    {
        title: "GAMING TRAILER",
        image: Card4,
    },
    {
        title: "LOGO ANIMATION",
        image: Card3,
    },
    {
        title: "2D ANIMATION",
        image: Card1,
    },
    {
        title: "GAMING TRAILER",
        image: Card4,
    },
    {
        title: "3D ANIMATION",
        image: Card2,
    },

];

export default function CardCarousel() {

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".cardCrousel", {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".cardCrousel",
                start: "top 70%",
                end: "top 50%",
                scrub: 1,
            }
        });
    });

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
            },
        ],
        appendDots: dots => (
            <div>
                <ul className="flex justify-center gap-1 space-x-2 mt-4">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-6 h-3 bg-[#281E3C] rounded-full transition-all duration-300 hover:bg-[#FF0050] " />
        )
    };



    return (
        <>

            <div className="w-full  bg-white -mt-74 md:px-44 px-8 py-8">

                <div className="relative cardCrousel">
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} className="px-2">
                                <div className="rounded-xl overflow-hidden shadow-lg relative" >
                                   <Image src={card.image} alt={card.title}  />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center text-center p-4">
                                        <h3 className="text-white font-otomanopeeOne text-4xl">{card.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


        </>
    );
}