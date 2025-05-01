"use client"
import "./component.css"
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import SliderArrowR from "../images/gallery/sliderArrowL.png";
import SliderArrowL from "../images/heroSection/sliderArrowL.png";
import Arrow from "../images/heroSection/arrow.png";
import Gif1 from "../images/videoProduct/gif1.gif";
import Gif2 from "../images/videoProduct/gif2.gif";
import Gif3 from "../images/videoProduct/gif3.gif";

const cards = [
    {
        title: "PROJECT NAME",
        image: Gif1,
    },
    {
        title: "PROJECT NAME",
        image: Gif2,
    },
    {
        title: "PROJECT NAME",
        image: Gif3,
    },
];

export default function VideoProduct() {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, centerMode: true },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, centerMode: true },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerMode: true },
            },
        ]
    };
    return (
        <>
            <section className="px-40 flex-col  bg-[#FF0050] pb-24 pt-18">

                <div className=" flex justify-between items-center pb-8 pt-4 ">
                    <h3 className="font-otomanopeeOne text-5xl uppercase text-white">Product Animation</h3>
                    <div className=" text-center gap-2 flex justify-center items-center ">
                        <button className=" bg-[#0066fe] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={previous}>
                            <Image src={SliderArrowL} alt={SliderArrowL} width={32} height={25} className="w-8 " />

                        </button>
                        <button className=" bg-[#281E3C] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={next}>
                            <Image src={SliderArrowR} alt={SliderArrowR} width={32} height={25} className="w-8 " />
                        </button>
                    </div>
                </div>
                <div className="">
                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
                        {cards.map((card, index) => (

                            <div key={index} className="px-2 w-full">
                                <div className="w-full mydiv aspect-[4/3] relative rounded-xl overflow-hidden"> 
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>

                <div className=" flex justify-center items-center mt-4">
                    <button className="mt-2 bg-white font-oswald text-black text-[14px]  flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
                        <span className=" custum-Shadow  bg-black rounded-full text-white flex justify-center items-center w-6 h-6 p-1.5 ">
                            <Image src={Arrow} alt={Arrow} width={17} height={17} className="" />
                        </span>
                    </button>
                </div>

            </section>
        </>
    );
}   