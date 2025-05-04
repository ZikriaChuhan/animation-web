"use client"
import "./component.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import IMg from "../images/ready/img.png";
import Jaja from "../images/ready/jaja.png";
import Jona from "../images/ready/Jona.png";
import Shap3 from "../images/ready/shap3.png";
import Card from "../images/ready/card1.png";


export default function Ready() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".ready-blueBox", {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".ready-blueBox",
                start: "top 70%",
                end: "top 50%",
                scrub: 1,
            }
        });
        gsap.from(".ready-blueBox .imge", {
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".ready-blueBox .imge",
                start: "top 70%",
                end: "top 50%",
                scrub: 1,
            }
        });
    });
    return (
        <>
        <section className="px-30 pb-20 hidden md:flex pt-10 ">
<<<<<<< HEAD
            <div className="flex items-center rounded-4xl p-12 relative bg-[#0066FF]">
=======
            <div className="ready-blueBox flex items-center rounded-4xl p-12 relative bg-[#0066FF]">
>>>>>>> 185bad5 (animate)
                <Image src={Shap3} alt="shap3" className=" w-[760px] absolute bottom-0 right-0 " />
                <Image src={Card} alt="card" className="imge" />
                <div className=" relative z-10 flex items-center justify-center pl-20 pr-40 ">
                <Image src={IMg} alt="img" className="imge" />
                <Image src={Jaja} alt="jaja" className="imge -mb-32" />
                </div>
                
                    <Image src={Jona} alt="jona" className="imge absolute -bottom-16 w-[670px] -right-18" />
                

            </div>
        </section>
        </>
    );
}