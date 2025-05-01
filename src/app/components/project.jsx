"use client"
import "./component.css"
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import Shap1 from "../images/project/shap1.png";
import Shap2 from "../images/project/shap2.png";
import Arrow from "../images/heroSection/arrow.png";
import Charac from "../images/project/character.png";
import SliderArrowR from "../images/gallery/sliderArrowL.png";
import BtnArrowR from "../images/heroSection/sliderArrowR.png";
import SliderArrowL from "../images/heroSection/sliderArrowL.png";
import Project1 from "../images/project/project1.png";
import Project2 from "../images/project/project2.png";
import Project3 from "../images/project/project3.png";
import Project4 from "../images/project/project4.png";

const cards = [
    {
        title: "PROJECT NAME",
        image: Project1,
    },
    {
        title: "PROJECT NAME",
        image: Project2,
    },
    {
        title: "PROJECT NAME",
        image: Project3,
    },
    {
        title: "GAMING TRAILER",
        image: Project4,
    },
];

export default function Project() {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
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
        ]
    };

    return (
        <>
            <section className="relative bg-white pt-24 pb-10 ">
                <Image src={Shap2} alt="Shap2" width={1920} height={665} className="w-full absolute bottom-0" />

                <div className=" relative flex gap-3 justify-center  items-center">
                    <div>
                        <Image src={Charac} alt="Character" width={589} height={622} className="w-[530px]" />
                    </div>
                    <div className=" relative self-start flex justify-center items-center">
                        <Image src={Shap1} alt="Shap1" width={264} height={256} className="w-54 " />
                        <h3 className="font-otomanopeeOne absolute text-center text-[22px] text-white">CAN’T <br /> BELIEVE <br /> WHAT’S NEXT!</h3>
                    </div>
                </div>

                <Marquee className="marquee mt-10" autoFill={true} pauseOnClick={true}>
                    <div className="flex mr-12 gap-2">
                        <p className="font-otomanopeeOne text-[#44E197] text-8xl">
                            KAMSOFT .
                        </p>
                    </div>
                </Marquee>
            </section>

            <section className="px-40 flex-col  bg-[#0066fe] pb-24">

                <div className=" flex justify-between items-center pb-8 pt-4 ">
                    <h3 className="font-otomanopeeOne text-5xl uppercase text-white">Gaming Project</h3>
                    <div className=" text-center gap-2 flex justify-center items-center ">
                        <button className=" bg-[#FF0050] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={previous}>
                            <Image src={SliderArrowL} alt={SliderArrowL} width={32} height={25} className="w-8 " />

                        </button>
                        <button className=" bg-[#281E3C] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={next}>
                            <Image src={SliderArrowR} alt={SliderArrowR} width={32} height={25} className="w-8 " />
                        </button>
                    </div>
                </div>
                <div >
                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
                        {cards.map((card, index) => (
                            
                            <div key={index} className="px-2">
                                <div className="rounded-xl overflow-hidden shadow-lg relative" >
                                    <Image src={card.image} alt={card.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center text-center p-4">
                                        <h3 className="text-white font-otomanopeeOne text-4xl">{card.title}</h3>
                                    </div>
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