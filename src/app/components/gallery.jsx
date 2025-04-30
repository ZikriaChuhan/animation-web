"use client"
import "./component.css"
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Shap1 from "../images/gallery/shap1.png";
import Shap2 from "../images/gallery/shap2.png";
import Shap3 from "../images/gallery/shap3.png";
import SliderArrowR from "../images/gallery/sliderArrowL.png";
import BtnArrowR from "../images/heroSection/sliderArrowR.png";
import SliderArrowL from "../images/heroSection/sliderArrowL.png";
import gallery1 from "../images/gallery/gallery1.png";
import gallery2 from "../images/gallery/gallery2.jpg";
import gallery3 from "../images/gallery/gallery3.jpg";
import gallery4 from "../images/gallery/gallery4.jpg";
import gallery5 from "../images/gallery/gallery5.jpg";

const cards = [
    {
        title: "2D ANIMATION",
        image: gallery1,
    },
    {
        title: "3D ANIMATION",
        image: gallery2,
    },
    {
        title: "LOGO ANIMATION",
        image: gallery3,
    },
    {
        title: "GAMING TRAILER",
        image: gallery4,
    },
    {
        title: "GAMING TRAILER",
        image: gallery5,
    },
    // {
    //     title: "2D ANIMATION",
    //     image: gallery1,
    // },
    // {
    //     title: "3D ANIMATION",
    //     image: gallery2,
    // },
    // {
    //     title: "LOGO ANIMATION",
    //     image: gallery3,
    // },
    // {
    //     title: "GAMING TRAILER",
    //     image: gallery4,
    // },
    // {
    //     title: "GAMING TRAILER",
    //     image: gallery5,
    // },
    // {
    //     title: "2D ANIMATION",
    //     image: gallery1,
    // },
    // {
    //     title: "3D ANIMATION",
    //     image: gallery2,
    // },
    // {
    //     title: "LOGO ANIMATION",
    //     image: gallery3,
    // },
    // {
    //     title: "GAMING TRAILER",
    //     image: gallery4,
    // },
    // {
    //     title: "GAMING TRAILER",
    //     image: gallery5,
    // },
];

export default function Gallery() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 3,
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
                settings: { slidesToShow: 1 },
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
            <section className=" ">
                <div className=" flex flex-col justify-center items-center pt-20 pb-10 px-20 relative">
                    <Image src={Shap1} alt={Shap1} width={125} height={129} className=" hidden md:flex absolute left-0 w-50" />
                    <h2 className="font-otomanopeeOne text-[#281E3C] text-center text-3xl md:text-[82px] uppercase">Our Gallery</h2>
                    <button className="mt-6 bg-[#281E3C] font-oswald text-white text-[14px] flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
                        <span className=" bg-white rounded-full flex justify-center items-center w-6 h-6 p-1.5 ">
                            <Image src={BtnArrowR} alt={BtnArrowR} width={17} height={17} className="" />
                        </span>
                    </button>
                </div>


                <div className="w-full bg-white py-8 relative">
                    <Image src={Shap2} alt={Shap2} width={125} height={129} className=" hidden md:flex absolute left-20 bottom-6 w-70" />
                    <Image src={Shap3} alt={Shap3} width={125} height={129} className=" hidden md:flex absolute right-0 bottom-0 w-70" />


                    <div style={{ perspective: "1000px" }} >
                        <Slider ref={slider => (sliderRef = slider)} {...settings}>
                            {cards.map((card, index) => (
                                <div key={index} className="px-2">
                                    <div className="rounded-xl overflow-hidden shadow-lg " >
                                        <Image src={card.image} alt={card.title} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className=" text-center gap-2 flex justify-center items-center mt-8">
                            <button className=" bg-[#FF0050] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={previous}>
                                <Image src={SliderArrowL} alt={SliderArrowL} width={32} height={25} className="w-8 " />

                            </button>
                            <button className=" bg-[#0066FF] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={next}>
                                <Image src={SliderArrowR} alt={SliderArrowR} width={32} height={25} className="w-8 " />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}