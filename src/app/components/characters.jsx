"use client"
import "./component.css"
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Fb from "../images/characters/fb.png";
import Insta from "../images/characters/insta.png";
import Twiter from "../images/characters/twiter.png";
import Youtube from "../images/characters/youtube.png";
import Shap1 from "../images/characters/Shap1.png";
import Shap2 from "../images/gallery/shap2.png";
import Mickey from "../images/characters/mick2.png";
import Vanellope from "../images/characters/vanell2.png";
import Link from "next/link";

export default function Characters() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".mickey-card", {
            x: 120,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".mickey-card",
                start: "top 70%",
                end: "top 45%",
                scrub: 1,
            }
        });
        gsap.from(".vanellope-card", {
            x: -120,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".vanellope-card",
                start: "top 70%",
                end: "top 45%",
                scrub: 1,
            }
        });
        gsap.from(".charashap2", {
            rotate: 360,
            repeat: -1,
            duration: 8,
            ease: "none",
        })
        gsap.to(".myshap3", {
            rotate: -20,
            repeat: -1,
            duration: 1,
            yoyo: true,
            ease: "back.out(1)"
        })

        const handleMouseMove = (e) => {
            const { clientY } = e;
            const y = (window.innerHeight / 2 - clientY) / 20;
      
            gsap.to(".charashap1", {
              y: y,
              duration: 0.5,
              ease: "power2.out",
            });
      
          };
      
          window.addEventListener("mousemove", handleMouseMove);
      
          return () => {
            window.removeEventListener("mousemove", handleMouseMove);
          };
    });

    return (
        <>
          <section className="relative flex flex-wrap items-center justify-center py-24 px-2 overflow-hidden ">
            <Image src={Shap1} alt="shap1" className="charashap1 hidden md:flex w-50 absolute left-0 bottom-0 z-20" />
            <div className="relative flex items-center justify-center vanellope-card">
              <Image src={Vanellope} alt="vanellope" className=" w-[500px]" />
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:scale-[0.9] duration-100 bg-[#BE08A6] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center absolute left-10 bottom-10 items-center rounded-full"
                rel="noopener noreferrer"
              >
                <Image src={Fb} alt="fb" className="" />
              </Link>
              <div className="flex absolute bottom-0 gap-9">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:scale-[0.9] duration-100 bg-[#BE08A6] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center items-center rounded-full"
                  rel="noopener noreferrer"
                >
                  <Image src={Insta} alt="insta" className="" />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="hover:scale-[0.9] duration-100 bg-[#BE08A6] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center items-center rounded-full"
                  rel="noopener noreferrer"
                >
                  <Image src={Twiter} alt="twiter" className="" />
                </Link>
              </div>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="hover:scale-[0.9] duration-100 bg-[#BE08A6] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center items-center  absolute right-10 bottom-10 rounded-full"
                rel="noopener noreferrer"
              >
                <Image src={Youtube} alt="youtube" className="" />
              </Link>
            </div>
      
            <div className="relative flex items-center justify-center mickey-card">
              <Image src={Mickey} alt="mickey" className=" w-[500px]" />
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:scale-[0.9] duration-100 bg-[#00C832] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center absolute left-10 bottom-10 items-center rounded-full"
                rel="noopener noreferrer"
              >
                <Image src={Fb} alt="fb" className="" />
              </Link>
              <div className="flex absolute bottom-0 gap-9">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:scale-[0.9] duration-100 bg-[#00C832] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center items-center rounded-full"
                  rel="noopener noreferrer"
                >
                  <Image src={Insta} alt="insta" className="" />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="hover:scale-[0.9] duration-100 bg-[#00C832] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center items-center rounded-full"
                  rel="noopener noreferrer"
                >
                  <Image src={Twiter} alt="twiter" className="" />
                </Link>
              </div>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="hover:scale-[0.9] duration-100 bg-[#00C832] md:w-18 md:h-18 w-10 h-10 md:p-[20px] p-[12px] flex justify-center items-center  absolute right-10 bottom-10 rounded-full"
                rel="noopener noreferrer"
              >
                <Image src={Youtube} alt="youtube" className="" />
              </Link>
            </div>
      
            <Image src={Shap2} alt="shap2" className="charashap2 hidden md:flex  w-44 absolute -right-14 top-14" />
          </section>
        </>
      )};