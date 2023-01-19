import React, { useState } from "react";
import { P1 } from "../../utils/Text/P1/P1";
import { H4 } from "../Text/H4/H4";
import s from "./FAQCard.module.scss";

export type FAQCardProps = {
    question: string;
    answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({question, answer}) => {

    const [isShow, setIsShow] = useState<boolean>(false);

    const toggleIsShow = () => {
        setIsShow(prev => !prev)
    }

    return (
            <div className={isShow ? `${s.faq} ${s.active}`: `${s.faq}`}>
                <div className={isShow ? `${s.faq__box} ${s.active}`: `${s.faq__box}`}>
                    <div className={s.faq__box__content}>
                        <H4>{question}</H4>
                        <P1>{answer}</P1>
                        {isShow 
                        ?  <span onClick={toggleIsShow} className={s.faq__box__content__toggle}>+</span>
                        :  <span onClick={toggleIsShow} className={s.faq__box__content__toggle}>&#8211;</span> }
                    </div>
                </div>
            </div>
    )
}

export {FAQCard};