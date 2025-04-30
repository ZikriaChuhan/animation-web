"use client"
import "./component.css"
import Image from "next/image";
import Charac from "../images/project/character.png";
import Shap1 from "../images/project/shap1.png";


export default function Project() {
    return (
        <>
        <div className="project flex gap-3 justify-center items-center">
            <div>
                <Image src={Charac} alt="Character" width={589} height={622} className="w-[500px]" />
            </div>
            <div className=" relative self-start flex justify-center items-center">
                <Image src={Shap1} alt="Shap1" width={264} height={256} className="w-60 " />
                <h3 className="font-otomanopeeOne absolute text-center text-[25px] text-white">CAN’T <br/> BELIEVE <br/> WHAT’S NEXT!</h3>
            </div>
        </div>
        </>
    );
}