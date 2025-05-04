"use client"
import "./component.css"

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Carousel() {
    return (
        <>
            <section className=" bg-[#FF0050]">
            <VelocityScroll defaultVelocity={2.5} className="font-otomanopeeOne text-white text-8xl py-6" >PROLIFIC STUDIO .</VelocityScroll>
            </section>
        </>
    );
}