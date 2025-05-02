"use client"
import "./component.css"
import Image from "next/image";
import IMg from "../images/ready/img.png";
import Jaja from "../images/ready/jaja.png";
import Jona from "../images/ready/Jona.png";
import Shap3 from "../images/ready/shap3.png";
import Card from "../images/ready/card1.png";


export default function Ready() {
    return (
        <>
        <section className="px-30 pb-20 hidden md:flex pt-10 ">
            <div className="flex items-center rounded-4xl p-12 relative bg-[#0066FF]">
                <Image src={Shap3} alt="shap3" className=" w-[760px] absolute bottom-0 right-0 " />
                <Image src={Card} alt="card" className="" />
                <div className=" relative z-10 flex items-center justify-center pl-20 pr-40 ">
                <Image src={IMg} alt="img" className="" />
                <Image src={Jaja} alt="jaja" className=" -mb-32" />
                </div>
                
                    <Image src={Jona} alt="jona" className="absolute -bottom-16 w-[670px] -right-18" />
                

            </div>
        </section>
        </>
    );
}