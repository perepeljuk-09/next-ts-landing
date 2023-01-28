import React from "react";
import { FAQCard } from "../../../utils/FAQCard/FAQCard";
import { FAQCardType } from "../../../types/types";
import s from "./../SectionQuestions.module.scss";

const FAQCardList: React.FC = () => {

    const questions: FAQCardType[] = [
        {id: 1, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 2, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 3, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 4, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 5, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
]
    
    return (
        <div className={s.questions__box__faq}>
            {questions.map( item => <FAQCard key={item.id} {...item}/>) } 
        </div>
    )
}

export {FAQCardList};




