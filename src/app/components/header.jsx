import Image from 'next/image';
import MailIcon from '../images/header/mail-icon.png'
import PhoneIcon from '../images/header/phone-icon.png'
import "./component.css"


export default function Header() {
    return (
        <header className='header flex items-center w-full'>
            <div className='logodiv bg-[#281E3C] text-white '>
                <h2 className=' text-[40px] font-bold '>LOGO</h2>
            </div>
            <div className='headerDiv flex items-center justify-between w-full '>
                <div className='centerheaderDiv flex items-center gap-4 '>
                    <div className="hidden md:flex justify-center items-center gap-3 text-gray-700">
                        <div className='mailIconDiv flex justify-center items-center rounded-full bg-black w-11 h-11'>
                            <Image src={MailIcon} alt={MailIcon} width={17} height={17} className=" w-3" />
                        </div>
                        <div className=' text-left'>
                            <h3 className=' text-[#EF512F] uppercase'>Mail us</h3>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center gap-3 text-gray-700">
                        <div className='mailIconDiv flex justify-center items-center rounded-full bg-black w-11 h-11'>
                            <Image src={PhoneIcon} alt={PhoneIcon} width={17} height={17} className=" w-3" />
                        </div>
                        <div className=' text-left'>
                            <h3 className=' text-[#EF512F] uppercase'>Call us Now </h3>
                            <span>(123)-456-789002</span>
                        </div>
                    </div>
                </div>

                <div className="rightHeaderDiv hidden md:flex  justify-center items-center gap-4 ">
                    <button className=' bg-black text-white rounded-2xl cursor-pointer w-full text-nowrap'>GET A QUOTE</button>
                    <button className=' bg-black text-white rounded-2xl cursor-pointer w-full'>LIVE CHAT</button>
                </div>
            </div>
        </header>
    );
}