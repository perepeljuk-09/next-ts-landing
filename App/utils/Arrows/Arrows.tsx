import React from "react";
import Image from "next/image";
import arrLeft from "./images/arrow-left.png";
import arrRight from "./images/arrow-right.png";
import s from "./Arrows.module.scss";

type ArrowProps = {
    nextStep?: () => void;
    backStep?: () => void;
}

const Arrows: React.FC<ArrowProps> = ({nextStep, backStep}) => {
    return (
        <div className={s.arrows}>
            <div className={s.arrow__block} onClick={backStep}>
                <Image src={arrLeft} alt='arrow left'/>
            </div>
            <div className={s.arrow__block} onClick={nextStep}>
                <Image src={arrRight} alt='arrow right'/>
            </div>
        </div>
    )
}

export {Arrows};