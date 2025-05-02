"use client"
import "./component.css"
import Image from "next/image";
import Logo from "../images/footer/logo.png";
import I1 from "../images/footer/i1.png";
import I2 from "../images/footer/i2.png";
import I3 from "../images/footer/i3.png";
import I4 from "../images/footer/i4.png";
import I5 from "../images/footer/i5.png";
import BtnArrowR from "../images/heroSection/sliderArrowR.png";



export default function Footer() {
    return (
        <>
           <section className=" bg-[#0065FB] md:p-24 p-6  ">
                <div className=" bg-white rounded-4xl pb-6">
                    <div className="flex items-center md:justify-between justify-center flex-wrap gap-3 md:px-16 py-10">
                        <Image src={Logo} alt="logo" className=" w-70" />
                        <button className="mt-6 bg-[#281E3C] font-oswald text-white text-[22px] flex justify-center items-center gap-3 px-3.5 uppercase py-2 rounded-full">Start Your Project Now
                            <span className=" bg-white rounded-full flex justify-center items-center w-8 h-8 p-1.5 ">
                                <Image src={BtnArrowR} alt={BtnArrowR} width={17} height={17} className="" />
                            </span>
                        </button>
                    </div>

                    <div className=" flex flex-wrap gap-8 md:gap-1 justify-between md:px-16 px-6 ">
                       <div>
                       <h2 className="md:text-5xl text-3xl mb-6 font-otomanopeeOne uppercase">Services</h2>
                        <ul>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] leading-0">•</span> 2d Animation</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> 3d Animation</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> Gaming Trailer</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> Gaming</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> Product Animation</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> Storyboard Animation</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> Logo Animation</li>
                            </ul>
                            <button className="mt-2 bg-[#281E3C] font-oswald text-white text-[26px] flex justify-center items-center gap-3 px-16 uppercase py-2 rounded-full">Much More
                        </button>
                       </div>

                       <div>
                       <h2 className="md:text-5xl text-3xl mb-6 font-otomanopeeOne uppercase">Contact</h2>
                        <ul>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] leading-0">•</span> (113)-456-7890</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> (878)-789-7890</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> info@example.com</li>
                            <li className="text-[#00AFDC] md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] font-sans leading-0">•</span> info@dummy.com</li>
                            </ul>
                       </div>

                       <div>
                       <h2 className="md:text-5xl text-3xl mb-6 font-otomanopeeOne uppercase">Locations</h2>
                        <ul>
                            <li className="text-black max-w-[520px]  md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] leading-0">•</span> <span className="text-[#00AFDC] font-semibold">Karachi Office:</span><h6 className="font-oswald pl-7 text-[18px]">Business Center, Office #202 2nd, Shahrah-e-Faisal Rd, Block-6 PECHS, Karachi</h6></li>
                            <li className="text-black max-w-[520px]  md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] leading-0">•</span> <span className="text-[#00AFDC] font-semibold">Colorado Office:</span><h6 className="font-oswald pl-7 text-[18px]">2100 Geng Rd Palo Alto, CA 94303 United States</h6></li>
                            <li className="text-black max-w-[520px]  md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] leading-0">•</span> <span className="text-[#00AFDC] font-semibold">Florida Office:</span><h6 className="font-oswald pl-7 text-[18px]">336 W Burleigh Blvd Unit 110, Tavares, FL 32778</h6></li>
                            <li className="text-black max-w-[520px]  md:text-[22px] text-[18px] font-otomanopeeOne uppercase"><span className="text-[#FF1306] font-bold text-[35px] leading-0">•</span> <span className="text-[#00AFDC] font-semibold">UK Office:</span><h6 className="font-oswald pl-7 text-[18px]">3rd Floor, Bridge Street News Building, London SE1 9SG, United Kingdom</h6></li>

                            
                            </ul>
                       </div>
                    </div>
                    <hr className=" mx-16 mt-7" />
                    <div className=" px-16 flex flex-wrap gap-3 items-center md:justify-between justify-center mt-3 ">
                        <div className="flex items-center gap-2">
                            <div className="md:p-3 p-1 bg-black md:w-12 md:h-12 w-10 h-10 rounded-full flex justify-center items-center">
                            <Image src={I1} alt="i1" />
                            </div>
                            <div className="md:p-3 p-1 bg-black md:w-12 md:h-12 w-10 h-10 rounded-full flex justify-center items-center">
                            <Image src={I2} alt="i2" />
                            </div>
                            <div className="md:p-3 p-1 bg-black md:w-12 md:h-12 w-10 h-10 rounded-full flex justify-center items-center">
                            <Image src={I3} alt="i3" />
                            </div>
                            <div className="md:p-3 p-1 bg-black md:w-12 md:h-12 w-10 h-10 rounded-full flex justify-center items-center">
                            <Image src={I4} alt="i4" />
                            </div>  
                            <div className="p-3 bg-black w-12 h-12 rounded-full flex justify-center items-center">
                            <Image src={I5} alt="i4" />
                            </div> 


                        </div>
                        <p className="font-oswald text-center md:text-left">© 2024 Prolific Studio Best Animation Studio in USA | All Rights Reserved</p>
                    </div>
                </div>

            </section>
        </>
    );
}