"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
import MailIcon from '../images/header/mail-icon.png'
import PhoneIcon from '../images/header/phone-icon.png'
import "./component.css"


export default function Header() {

    useGSAP(() => {
        gsap.from(".logodiv h2",{
            x:-800,
            opacity:0,
            duration:1,
            ease:"back.out(1)",
        })
        gsap.from(".centerheaderDiv .mailus",{
            y:-800,
            opacity:0,
            duration:1,
            stagger:0.2,
            ease:"power2.out",
        })
        gsap.from(".rightHeaderDiv button",{
            scale:0.5,
            opacity:0,
            duration:1,
            stagger:0.2,
            ease:"bounce.out",
        })

    })
    return (
        <header className='header flex items-center w-full'>
            <div className='logodiv bg-[#281E3C] text-white '>
                <h2 className=' text-[40px] font-bold '>LOGO</h2>
            </div>
            <div className='headerDiv flex items-center justify-between w-full '>
                <div className='centerheaderDiv flex items-center gap-4 '>
                    <div className="mailus hidden md:flex justify-center items-center gap-3 text-gray-700">
                        <div className='mailIconDiv hover:scale-[0.9] duration-75 flex justify-center items-center rounded-full bg-black w-11 h-11'>
                            <Image src={MailIcon} alt="mail" width={17} height={17} className=" w-3" />
                        </div>
                        <div className=' text-left'>
                            <h3 className=' text-[#EF512F] uppercase'>Mail us</h3>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="mailus hidden md:flex justify-center items-center gap-3 text-gray-700">
                        <div className='mailIconDiv hover:scale-[0.9] duration-75 flex justify-center items-center rounded-full bg-black w-11 h-11'>
                            <Image src={PhoneIcon} alt="phone" width={17} height={17} className=" w-3" />
                        </div>
                        <div className=' text-left'>
                            <h3 className=' text-[#EF512F] uppercase'>Call us Now </h3>
                            <span>(123)-456-789002</span>
                        </div>
                    </div>
                </div>
    
                <div className="rightHeaderDiv hidden md:flex justify-center items-center gap-4 ">
                    <button className='active:scale-[0.9] bg-black text-white rounded-2xl cursor-pointer w-full text-nowrap px-4 py-2'>
                        GET A QUOTE
                    </button>
                    <button className='active:scale-[0.9] bg-black text-white rounded-2xl cursor-pointer w-full px-4 py-2'>
                        LIVE CHAT
                    </button>
                </div>
            </div>
        </header>
    );
}