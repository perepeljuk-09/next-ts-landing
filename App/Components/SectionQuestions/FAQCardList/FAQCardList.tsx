import React from "react";
import { FAQCard } from "../../../utils/FAQCard/FAQCard";
import s from "./../SectionQuestions.module.scss";

type FAQCard = {
    id: number;
    question: string;
    answer: string;
}

const FAQCardList: React.FC = () => {

    const questions: FAQCard[] = [
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




