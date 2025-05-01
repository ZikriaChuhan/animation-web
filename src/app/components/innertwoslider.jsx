"use client"
import "./component.css"
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Shap1 from "../images/twoSlider/shap1.png";
import Arrow from "../images/heroSection/arrow.png";
import Arrowtop from "../images/twoSlider/arrowtop.png";
import Arrowdown from "../images/twoSlider/arrowdown.png";
import Character1 from "../images/twoSlider/character1.png";
import Character2 from "../images/twoSlider/character2.png";

export default function InnerTwoSlider() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        vertical: true,
        slidesToScroll: 1
    };

    return (
        <>
            <div>
                <div className="flex items-center justify-center rounded-4xl bg-[#FFF000] overflow-hidden ">
                    <div className=" bg-[#FFF000] px-5 ">
                        <button className=" bg-[#281E3C] rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={previous}>
                            <Image src={Arrowtop} alt="arrowtop" width={32} height={25} className="w-8 " />

                        </button>
                        <button className=" bg-[#0066FF] mt-4 rounded-full cursor-pointer flex justify-center items-center w-20 h-20 p-1 " onClick={next}>
                            <Image src={Arrowdown} alt="Arrowdown" width={32} height={25} className="w-8 " />
                        </button>
                    </div>

                    <div className=" max-w-[90%]">
                        <Slider ref={slider => (sliderRef = slider)} {...settings}>

                            <div key={1}>
                                <div className=" bg-[#00AFDC] w-full h-full flex justify-between pl-12 pr-20 py-[2px] items-center relative">
                                    <Image src={Shap1} alt="Shap1" width={310} height={160} className=" absolute right-10 top-0 w-60 " />
                                    <Image src={Character2} alt="Character2" width={422} height={689} className=" w-[311px] " />
                                    <div>
                                        <h3 className="font-otomanopeeOne text-white text-8xl uppercase">3d</h3>
                                        <h3 className="font-otomanopeeOne text-white text-6xl uppercase">Animation</h3>
                                        <div className=" flex justify-start items-center mt-4">
                                            <button className="mt-2 bg-white font-oswald text-black text-[14px]  flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
                                                <span className=" custum-Shadow  bg-black rounded-full text-white flex justify-center items-center w-6 h-6 p-1.5 ">
                                                    <Image src={Arrow} alt={Arrow} width={17} height={17} className="" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div key={2}>
                                <div className=" bg-[#00AFDC] w-full h-full flex justify-between pl-12 pr-20 py-[2px] items-center relative">
                                    <Image src={Shap1} alt="Shap1" width={310} height={160} className=" absolute  right-10 top-0 w-60 " />
                                    <Image src={Character1} alt="Character1" width={350} height={593} className=" w-[300px] " />
                                    <div>
                                        <h3 className="font-otomanopeeOne text-white text-8xl uppercase">2d</h3>
                                        <h3 className="font-otomanopeeOne text-white text-6xl uppercase">Animation</h3>
                                        <div className=" flex justify-start items-center mt-4">
                                            <button className="mt-2 bg-white font-oswald text-black text-[14px]  flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
                                                <span className=" custum-Shadow  bg-black rounded-full text-white flex justify-center items-center w-6 h-6 p-1.5 ">
                                                    <Image src={Arrow} alt={Arrow} width={17} height={17} className="" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    );
}