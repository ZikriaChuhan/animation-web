"use client";
import "./component.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { useState } from "react";
import Arrow from "../images/heroSection/arrow.png";
import Shap1 from "../images/heroSection/heroshap1.png";
import Shap2 from "../images/heroSection/heroshap2.png";
import Shap3 from "../images/heroSection/heroshap3.png";
import Characters from "../images/heroSection/characters.png"
import SliderArrowL from "../images/heroSection/sliderArrowL.png";
import SliderArrowR from "../images/heroSection/sliderArrowR.png";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";


export default function HeroSection() {
  const [isBlue, setIsBlue] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const toggleSlide = () => setIsBlue(prev => !prev);

  useGSAP(() => {
    gsap.from(".shap2", {
      rotate: 360,
      repeat: -1,
      duration: 8,
      ease: "none",
    });
    gsap.to(".shap3", {
      rotate: -70,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "back.out(1)"
    });
    gsap.from(".characters", {
      scale: 0.3,
      duration: 1,
      delay: 1,
      opacity: 0,
      ease: "bounce.out",

    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (window.innerWidth / 2 - clientX) / 20;
      const y = (window.innerHeight / 2 - clientY) / 20;

      gsap.to(".shap1", {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power2.out",
      });

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  })

  return (
    <section className=" overflow-x-hidden overflow-y-visible">
      <section className="relative overflow-hidden  w-full text-white ">

        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out w-[200%] flex "
          style={{ transform: isBlue ? "translateX(-50%)" : "translateX(0%)" }}
        >
          <div className="w-1/2 bg-[#FF0050] " />
          <div className="w-1/2 bg-[#281E3C]" />
        </div>


        <div className="  flex flex-col justify-center items-center text-white pt-20 md:pb-84 pb-30 px-20 relative">
          <Image src={Shap1} alt={Shap1} width={125} height={129} className="shap1 hidden md:flex absolute -left-10 w-40" />
          <Image src={Shap2} alt={Shap2} width={235} height={165} className="shap2 absolute md:left-[30%] -top-14 w-44" />
          <Image src={Shap3} alt={Shap3} width={121} height={211} className="shap3  absolute right-0 md:top-0 bottom-10 md:w-26 w-20" />
          <div onClick={toggleSlide} className=" bg-black rounded-full cursor-pointer absolute hidden md:flex justify-center items-center right-2 bottom-2 w-20 h-20 p-1">
            <Image src={SliderArrowL} alt={SliderArrowL} width={32} height={25} className="w-8 " />
          </div>
          <div className="flex md:flex-nowrap flex-wrap md:gap-16 py-12 md:px-24 justify-center items-center text-center">
            <div className="font-otomanopeeOne text-left heading-texts">
              <BoxReveal boxColor={"#281E3C"} duration={0.5}>
                <h4 className="md:text-5xl text-2xl text-line">ALL</h4>
              </BoxReveal>
              <BoxReveal boxColor={"#281E3C"} duration={0.5}>
                <h3 className="md:text-[80px] text-5xl leading-18 text-line">ANIMATION</h3>
              </BoxReveal>
              <BoxReveal boxColor={"#281E3C"} duration={0.5}>
                <h4 className="md:text-[38px] text-2xl text-line">PROJECTS ACCEPTED</h4>
              </BoxReveal>
            </div>
            <div className=" text-left">
              <BoxReveal boxColor={"#281E3C"} duration={0.5}>
                <p className="mt-4 font-jost max-w-2xl mx-auto text-md text-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley lorem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#281E3C"} duration={0.5}>
                <button className="mt-2 bg-white font-oswald text-black text-[14px] flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
                  <span className=" custum-Shadow  bg-black rounded-full text-white flex justify-center items-center w-6 h-6 p-1.5 ">
                    <Image src={Arrow} alt={Arrow} width={17} height={17} className="" />
                  </span>
                </button>
              </BoxReveal>
            </div>
          </div>

        </div>
      </section>




      <section className="relative w-full text-white" >

        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out w-[200%] flex "
          style={{ transform: isBlue ? "translateX(0%)" : "translateX(-50%)" }}
        >
          <div className="w-1/2 bg-[#FF0050]" />
          <div className="w-1/2 bg-[#281E3C]" />
        </div>


        <div className=" text-white  flex justify-center items-center flex-col pt-80 pb-80 text-center relative ">
          <motion.div
            className="hidden md:flex md:flex-col absolute -left-44 top-60 uppercase -rotate-90 font-otomanopeeOne text-8xl"
            initial={{ backgroundPosition: "200% 0" }}
            animate={{ backgroundPosition: "-200% 0" }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff2f, #FFFFFF1A, #ffffff2f)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <h2>Animation</h2>
            <h2>Studio</h2>
          </motion.div>
          <div onClick={toggleSlide} className=" bg-white cursor-pointer rounded-full absolute hidden md:flex justify-center items-center right-2 top-2 w-20 h-20 p-1">
            <Image src={SliderArrowR} alt={SliderArrowR} width={32} height={25} className="w-8 " />
          </div>

          {/* Characters Image */}
          <div className=" md:mt-[-660px] mt-[-450px] flex justify-center  ">
            <Image
              src={Characters}
              alt="characters"
              width={1100}
              height={800}
              className="characters md:max-w-4xl md:p-0 px-3 "
            />
          </div>
          <h3 className="md:text-7xl text-5xl mt-4 max-w-3xl  mb-4 font-otomanopeeOne">
            <TextAnimate animation="blurInUp" by="word" delay={0.5}>
              ARE YOU READY FOR PROJECT
            </TextAnimate>
          </h3>
          <button className="mt-6 bg-white font-oswald text-black text-[14px] flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
            <span className=" custum-Shadow  bg-black rounded-full text-white flex justify-center items-center w-6 h-6 p-1.5 ">
              <Image src={Arrow} alt={Arrow} width={17} height={17} className="" />
            </span>
          </button>

        </div>
      </section>

    </section>
  );
}