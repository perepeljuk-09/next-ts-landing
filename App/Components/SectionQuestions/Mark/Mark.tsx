import React from "react";
import mark from "./../img/mark.png";
import Image from "next/image";
import { P1 } from "../../../utils/Text/P1/P1";
import s from "./../SectionQuestions.module.scss";

const Mark: React.FC = () => {    
    return (
        <div className={s.questions__box__mark}>
            <P1>Do you have any kind of questions?
                <br/>We are here to help.
            </P1>
            <div className={s.questions__box__mark__photo}>
                <Image src={mark.src} alt="mark" width={mark.width} height={mark.height} />
            </div>
        </div>
    )
}

export {Mark};