"use client"
import "./component.css"
import Marquee from "react-fast-marquee";

export default function Carousel() {
    return (
        <>
            <section className=" bg-[#FF0050]">
            <Marquee className="marquee pt-10" autoFill={true} pauseOnClick={true}>
                <div className="flex mr-12 gap-2">
                    <p className="font-otomanopeeOne text-white text-8xl">
                        PROLIFIC STUDIO .
                    </p>
                </div>
            </Marquee>
            <Marquee direction="right" className="marquee mt-6" autoFill={true} pauseOnClick={true}>
                <div className="flex mr-12 gap-2">
                    <p className="font-otomanopeeOne text-white text-8xl">
                        PROLIFIC STUDIO .
                    </p>
                </div>
            </Marquee>
            </section>
        </>
    );
}