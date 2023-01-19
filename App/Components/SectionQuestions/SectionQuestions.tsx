import React from "react";
import { H2 } from "../../utils/Text/H2/H2";
import { FAQCardList } from "./FAQCardList/FAQCardList";
import { Mark } from "./Mark/Mark";
import s from "./SectionQuestions.module.scss";

const SectionQuestions: React.FC = () => {   
    return (
        <section className={s.questions}>
            <H2>Frequently Asked Questions</H2>
            <div className={s.questions__box}>
                <Mark/>
                <FAQCardList/>
            </div>
            <div className={s.ellipse}></div>
        </section>
    )
}

export {SectionQuestions};