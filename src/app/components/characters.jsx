"use client"
import "./component.css"
import Image from "next/image";
import Fb from "../images/characters/fb.png";
import Insta from "../images/characters/insta.png";
import Twiter from "../images/characters/twiter.png";
import Youtube from "../images/characters/youtube.png";
import Shap1 from "../images/characters/Shap1.png";
import Shap2 from "../images/characters/shap2.png";
import Mickey from "../images/characters/mick2.png";
import Vanellope from "../images/characters/vanell2.png";
import Link from "next/link";

export default function Characters() {
    return (
        <>
            <section className="relative flex  items-center justify-center py-24 ">
                <Image src={Shap1} alt="shap1" className=" w-50 absolute left-0 bottom-0" />
                <div className="relative flex items-center justify-center">

                    <Image src={Vanellope} alt="vanellope" className=" w-[500px]" />

                    <Link href="https://www.facebook.com/" target="_blank" className=" bg-[#BE08A6] w-18 h-18 p-[20px] flex justify-center absolute left-10 bottom-10 items-center rounded-full" rel="noopener noreferrer">
                        <Image src={Fb} alt="fb" className="" />
                    </Link>

                    <div className="flex absolute bottom-0 gap-9">

                        <Link href="https://www.instagram.com/" target="_blank" className=" bg-[#BE08A6] w-18 h-18 p-[20px] flex justify-center items-center rounded-full" rel="noopener noreferrer">
                            <Image src={Insta} alt="insta" className="" />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" className=" bg-[#BE08A6] w-18 h-18 p-[20px] flex justify-center items-center rounded-full" rel="noopener noreferrer">
                            <Image src={Twiter} alt="twiter" className="" />
                        </Link>
                    </div>
                    <Link href="https://www.youtube.com/" target="_blank" className=" bg-[#BE08A6] w-18 h-18 p-[20px] flex justify-center items-center  absolute right-10 bottom-10 rounded-full" rel="noopener noreferrer">
                        <Image src={Youtube} alt="youtube" className="" />
                    </Link>

                </div>
                <div className="relative flex  items-center justify-center">
                    <Image src={Mickey} alt="mickey" className=" w-[500px]" />

                    <Link href="https://www.facebook.com/" target="_blank" className=" bg-[#00C832] w-18 h-18 p-[20px] flex justify-center absolute left-10 bottom-10 items-center rounded-full" rel="noopener noreferrer">
                        <Image src={Fb} alt="fb" className="" />
                    </Link>

                    <div className="flex absolute bottom-0 gap-9">

                        <Link href="https://www.instagram.com/" target="_blank" className=" bg-[#00C832] w-18 h-18 p-[20px] flex justify-center items-center rounded-full" rel="noopener noreferrer">
                            <Image src={Insta} alt="insta" className="" />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" className=" bg-[#00C832] w-18 h-18 p-[20px] flex justify-center items-center rounded-full" rel="noopener noreferrer">
                            <Image src={Twiter} alt="twiter" className="" />
                        </Link>
                    </div>
                    <Link href="https://www.youtube.com/" target="_blank" className=" bg-[#00C832] w-18 h-18 p-[20px] flex justify-center items-center  absolute right-10 bottom-10 rounded-full" rel="noopener noreferrer">
                        <Image src={Youtube} alt="youtube" className="" />
                    </Link>
                </div>
                <Image src={Shap2} alt="shap2" className=" w-32 absolute right-0 top-14" />
            </section>
        </>
    );
}